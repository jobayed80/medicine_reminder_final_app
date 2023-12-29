import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import InputField from 'components/fields/InputField';
import { FcGoogle } from "react-icons/fc";
import Checkbox from 'components/checkbox';

import authImg from "assets/img/prescription.png";
import Footer from 'components/footer/FooterAuthDefault';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';

// /used DRAWER
import { Drawer, Modal, Button } from 'antd';


const Update = () => {
  const [modalShow, setModalShow] = React.useState(false);





  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const { id } = useParams();
  const navigate = useNavigate()
  const [medicines, setMedicines] = useState([]);

  
  useEffect(() => {
    // setOpen(true)
    axios.get("http://localhost:8082/prescriptiondetails/" + id)
    .then(res => {

      setValues({...values, medical_name:res.data[0].medical_name , doctor_name:res.data[0].doctor_name, doctor_notes:res.data[0].doctor_notes });
    })
    .catch(err => console.log(err))
  }, []);
  
  const [values, setValues] = useState({
    // Id: "",
    medical_name: "",
    doctor_name: "",
    doctor_notes: "",
  })



  // update
  const handleUpdate = (e) =>{
    e.preventDefault();
    axios.put("http://localhost:8082/prescription/update/" + id, values)
    .then(res =>{
      console.log("edit"+res)
      navigate('/admin/prescription')
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Updated prescription data"
      });
    })
  }

  return (


    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Link to="/admin/prescription" className="mt-0 w-max lg:pt-10">
                  <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                        fill="#A3AED0"
                      />
                    </svg>
                    <p className="ml-3 text-sm text-gray-600">
                      Back to prescription
                    </p>
                  </div>
                </Link>


                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                <div
                    className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                    style={{ backgroundImage: `url(${authImg})` }}
                  />
                </div>

                </div>

                {/* <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes> */}


                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                    {/* Sign in section */}
                  <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                    <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                      Update Prescribtion
                    </h4>
                    {/* <h1>{medicines.name}</h1> */}

                    <form onSubmit={handleUpdate} className="w-full mt-2 border-2 border-bg-blue p-4 rounded-xl  md:mb-8 sm:mb-10">
                      

                      <div class="mb-5">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prescribtion Id</label>
                        <input disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={id}></input>
                      </div>

                      <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="">
                          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter medical name</label>
                          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napa" required
                             onChange={e => setValues({ ...values, medical_name: e.target.value })} value={values.medical_name}></input>
                        </div>
                        <div>
                          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter company name</label>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Square" required
                           onChange={e => setValues({ ...values, doctor_name: e.target.value })} value={values.doctor_name}></input>
                        </div>
                       
                      </div>

                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                      <textarea id="message" rows="4" class="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required
                      onChange={e => setValues({ ...values, doctor_notes: e.target.value })} value={values.doctor_notes}></textarea>
                    
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <button type="reset" class="w-full  ml-3 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>


                      



                     

                    </form>
                   
                  </div>
                 
              </div>
              <Footer></Footer>
            </div>
          </div>
        </main>
      </div>
    </div>


  )
}

export default Update