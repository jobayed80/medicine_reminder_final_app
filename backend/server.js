const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


//create db
const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    database: "medicine_reminder"

})

db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });


app.get('/', (req,res)=>{
    return res.json("From Backend Jobayed")
})




// User_Profile create  
app.post('/create_profile', (req,res)=>{
    const sql = 'INSERT INTO user_profile ( `First_Name`, `Last_Name`, `Address`, `Contact` ,  `Description`, `Date`, `Country`, `Gender`) VALUES (?)';
    const values = [
        // req.body.Id,
        req.body.First_Name,
        req.body.Last_Name,
        req.body.Address,
        req.body.Contact,
        req.body.Description,
        req.body.Date,
        req.body.Country,
        req.body.Gender,
        
    ]
    db.query(sql,[values],  (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    }) 
})



// medicine id generated
app.get('/getMedicineId', (req, res) => {
  const query = 'SELECT MAX(Id) AS max_id FROM medicine';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    const maxId = results[0].max_id;
    res.json({ max_id: maxId });
  });
});


// medicine create  
app.post('/create_medicine', (req,res)=>{
    const sql = 'INSERT INTO medicine (`name`, `company`, `expire_date` ,  `dosage`, `introduction`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.company,
        req.body.expire_date,
        req.body.dosage,
        req.body.introduction,
    ]
    db.query(sql,[values],  (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    }) 
  })

  // API endpoint to fetch data from MySQL
app.get('/medicine_data', (req, res) => {
    const query = 'SELECT * FROM medicine';
    db.query(query, (err, result) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).send('Error fetching data from MySQL');
      } else {
        res.json(result);
      }
    });
  });

  //Search the Records

app.get("/medicine/:id", (req, res) => {
  var medicineid = req.params.id;
  var sql = "SELECT * FROM medicine WHERE id=" + medicineid;
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});

  //Delete the Records

  app.delete("/delete_medicine/:id", (req, res) => {
    let sql = "DELETE FROM medicine WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });

//   delete all data for medicine
app.delete('/deleteAllData', (req, res) => {
    const query = 'DELETE FROM medicine';
  
    db.query(query, (error, results, fields) => {
      if (error) throw error;
  
      res.json({ success: true, message: 'All data deleted successfully.' });
    });
  });




app.listen(8082, ()=>{
    console.log("listening")
})