const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

// used for images
const moment = require("moment")
const multer = require('multer');
const path = require('path');

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





























// used for user profile image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
// img filter
const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(null,Error("only image is allowd"))
  }
}



const upload = multer({  
  storage:storage,
  fileFilter:isImage
});

app.use("/uploads",express.static("./uploads"))

app.post('/upload', upload.single('image'), (req, res) => {
  const {
    First_Name,
    Last_Name,
    Address,
    Contact,
    Description,
    Date,
    Country,
    Gender,
  } = req.body;

  const imagePath = req.file.path;

  
  // Insert data into MySQL
  const sql =
    'INSERT INTO user_profile (First_Name, Last_Name, Address, Contact, Description, Date, Country, Gender, imagePath) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
  db.query(sql, [First_Name, Last_Name, Address, Contact, Description, Date, Country, Gender,  imagePath], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
});


app.get('/getDataById/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * FROM user_profile WHERE Id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result[0]);
    }
  });
});

// last profile picture collect
app.get('/latestDataProfile', (req, res) => {
  const query = 'SELECT * FROM user_profile ORDER BY Id DESC LIMIT 1';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});


































// user_profile id generated
app.get('/getProfileId', (req, res) => {
  const query = 'SELECT MAX(Id) AS max_id FROM user_profile';

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
app.post('/create_medicine', upload.single('image'),  (req,res)=>{

  const {
    name,
    company,
    expire_date,
    dosage,
    introduction,
  } = req.body;

  const imagePath = req.file.path;

  
  // Insert data into MySQL
  const sql =
    'INSERT INTO medicine (name, company, expire_date, dosage, introduction, imagePath) VALUES (?, ?, ?, ?, ?, ?)';
    
  db.query(sql, [name, company, expire_date, dosage, introduction , imagePath], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
})


// last 3 data display for medicine
app.get('/latestDataMedicine', (req, res) => {
  const query = 'SELECT * FROM medicine ORDER BY Id DESC LIMIT 3';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});






// User_Profile create  
// app.post('/create_profile', (req,res)=>{
//     const sql = 'INSERT INTO user_profile ( `First_Name`, `Last_Name`, `Address`, `Contact` ,  `Description`, `Date`, `Country`, `Gender`) VALUES (?)';
//     const values = [
//         // req.body.Id,
//         req.body.First_Name,
//         req.body.Last_Name,
//         req.body.Address,
//         req.body.Contact,
//         req.body.Description,
//         req.body.Date,
//         req.body.Country,
//         req.body.Gender,
        
//     ]
//     db.query(sql,[values],  (err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     }) 
// })







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


    // individual details display for medicine
    app.get("/medicinedetails/:id", (req, res) => {
      const id = req.params.id;
      db.query("SELECT * FROM medicine WHERE id = ?", id, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });




//Update the Records medicine
app.put("/medicine/update/:id", (req, res) => {
  let sql =
    "UPDATE medicine SET name='" +
    req.body.name +
    "', company='" +
    req.body.company +
    "',expire_date='" +
    req.body.expire_date +
    "', dosage='" +
    req.body.dosage +

    "', introduction='" +
    req.body.introduction +

    "'  WHERE id=" +
    req.params.id;

  let a = db.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "Student Updated Failed" });
    } else {
      res.send({ status: true, message: "Student Updated successfully" });
    }
  });
});

  //Delete the Records by id
  app.delete("/delete_medicine/:id", (req, res) => {
    let sql = "DELETE FROM medicine WHERE Id= ?";
    const id = req.params.id
    db.query(sql, [id], (err, result) => {
      if (err) return res.json({ Message:"Student Deleted Failed" });
        return res.json(result)
      
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







  // prescription id generated
  app.get('/getPrescriptionId', (req, res) => {
    const query = 'SELECT MAX(Id) AS max_id FROM prescription';
  
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
app.post('/create_prescription', upload.single('image'),  (req,res)=>{

  const {
    medical_name,
    doctor_name,
    doctor_notes,
  } = req.body;

  const imagePath = req.file.path;

  
  // Insert data prescription
  const sql =
    'INSERT INTO prescription (medical_name, doctor_name, doctor_notes, imagePath) VALUES (?, ?, ?, ?)';
    
  db.query(sql, [medical_name, doctor_name, doctor_notes, imagePath], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    }
  });
})


 // individual details display for medicine
 app.get("/prescriptiondetails/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM prescription WHERE Id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Update the Records prescription
app.put("/prescription/update/:id", (req, res) => {
  let sql =
    "UPDATE prescription SET medical_name='" +
    req.body.medical_name +
    "', doctor_name='" +
    req.body.doctor_name +
    "',doctor_notes='" +
    req.body.doctor_notes +

    "'  WHERE Id=" +
    req.params.id;

  let a = db.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "Student Updated Failed" });
    } else {
      res.send({ status: true, message: "Student Updated successfully" });
    }
  });
});


// last 3 data display
app.get('/latestDataPrescription', (req, res) => {
  const query = 'SELECT * FROM prescription ORDER BY Id DESC LIMIT 3';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});



// view all data
app.get('/prescription_data', (req, res) => {
  const query = 'SELECT * FROM prescription';
  db.query(query, (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Error fetching data from MySQL');
    } else {
      res.json(result);
    }
  });
});


//Delete the Records by id
app.delete("/delete_prescription/:id", (req, res) => {
  let sql = "DELETE FROM prescription WHERE Id= ?";
  const id = req.params.id
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message:"Student Deleted Failed" });
      return res.json(result)
    
  });
});

// delete all data for medicine
app.delete('/deleteAllDataPrescription', (req, res) => {
  const query = 'DELETE FROM prescription';

  db.query(query, (error, results, fields) => {
    if (error) throw error;

    res.json({ success: true, message: 'All data deleted successfully.' });
  });
});






// total medicine id
app.get('/countMedicine', (req, res) => {
  db.query('SELECT COUNT(*) AS totalCount FROM medicine', (error, results) => {
    if (error) throw error;
    res.json({ count: results[0].totalCount });
  });
});

// total prescription id
app.get('/countPrescription', (req, res) => {
  db.query('SELECT COUNT(*) AS totalCount FROM prescription', (error, results) => {
    if (error) throw error;
    res.json({ count: results[0].totalCount });
  });
});


// lattest last 5 data row for medicine
app.get('/lastdataMedicine', (req, res) => {
  const query = 'SELECT * FROM medicine ORDER BY Id DESC LIMIT 5';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// lattest last 5 data row for prescription
app.get('/lastdataPrescription', (req, res) => {
  const query = 'SELECT * FROM prescription ORDER BY Id DESC LIMIT 5';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});




app.listen(8082, ()=>{
    console.log("listening")
})