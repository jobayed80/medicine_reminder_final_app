import React from "react";
import { useState } from "react";
// server
import axios from 'axios'
import moment from 'moment'

import FixedPlugin from "components/fixedPlugin/FixedPlugin";

// sweetalert notification
import Swal from 'sweetalert2'
import { useEffect } from "react";

import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import src from "tailwindcss-rtl";
import { Link, useNavigate } from "react-router-dom";
import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";
// logout firebase
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged 
} from 'firebase/auth'

// this part used for recent added card
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';

// used for profile form
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Modal } from 'antd';
const { Option } = Select;











const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  const navigator = useNavigate()
  let auth = getAuth();
  let [photo, setPhoto] = useState('')
  let [name, setName] = useState('')
     // login verified check for google
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
         
                setPhoto(user.photoURL)
                setName(user.displayName)
             
      })
  },[])


  // get MaxId user_profile
  const [maxId, setMaxId] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8082/getProfileId')
      .then(response => {
        setMaxId(response.data.max_id);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // used for profile form
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // const [values, setValues] = React.useState({
  //   // Id: "",
  //   First_Name: "",
  //   Last_Name: "",
  //   Address: "",
  //   Contact: "",
  //   Description: "",
  //   Date: "",
  //   Country: "",
  //   Gender: "",
  // })
  // create user profile
  // const handleSubmitProfile = async (e) => {
  //   e.preventDefault()
  //   axios.post('http://localhost:8082/create_profile', values)
  //     .then(res => {
  //       console.log(res)
  //       console.log("inserted")
  //     })
  //     .catch(err => console.log(err))
  //     const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     }
  //   });
  //   Toast.fire({
  //     icon: "success",
  //     title: "Inserted your data"
  //   });  
  //   onClose()
  //   window.location.reload();


  // }












  const [First_Name, setFname] = useState('');
  const [Last_Name, setLname] = useState('');
  const [Address, setAddress] = useState('');
  const [Contact, setContact] = useState('');
  const [Description, setDescription] = useState('');
  const [Date, setDate] = useState('');
  const [Country, setCountry] = useState('');
  const [Gender, setGender] = useState('');
  const [image, setImage] = useState(null);


  const handleFile = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmitProfile = (e) => {
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
      title: "Inserted your data"
    });


    const formData = new FormData();
    formData.append('First_Name', First_Name);
    formData.append('Last_Name', Last_Name);
    formData.append('Address', Address);
    formData.append('Contact', Contact);
    formData.append('Description', Description);
    formData.append('Date', Date);
    formData.append('Country', Country);
    formData.append('Gender', Gender);
    formData.append('image', image);

    try {
      axios.post('http://localhost:8082/upload', formData);
      console.log('Data uploaded successfully');
    } catch (error) {
      console.error('Error uploading data: ', error);
    }

    // window.location.reload();
  }

  // const handleUpload = async (e) =>{
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', image);

  //     await axios.post('http://localhost:8082/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     alert('Image uploaded successfully!');
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     alert('Error uploading image. Please try again.'+ error);
  //   }
  // }





  // used for profile display by search id
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //  const [userData, setUserData] = useState({});
  //   const [userId, setUserId] = useState('');

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8082/getDataById/${userId}`);
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };



  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/getDataById/${maxId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setUserData(null);
    }
  };




  // used for download image profile
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };



  // logout
  let handleLogout = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
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
        title: "Logout Successfully"
      });
      navigator('/admin/authentication/signinAuth')
    }).catch((error) => {
      // An error happened.
    });
  }




  return (

    <>
      <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
        <div className="ml-[6px]">

          <div className="h-6 w-[224px] pt-1">
            <a
              className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
              href=" "
            >
              Pages
              <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                {" "}
                /{" "}
              </span>
            </a>
            <Link
              className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
              to="#"
            >
              {brandText}
            </Link>
          </div>
          <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
            <Link
              to="#"
              className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
            >
              {brandText}
            </Link>
          </p>
        </div>

        <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
          <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
          <span
            className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
            onClick={onOpenSidenav}
          >
            <FiAlignJustify className="h-5 w-5" />
          </span>
          {/* start Notification */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            children={
              <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-navy-700 dark:text-white">
                    Notification
                  </p>
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    Mark all read
                  </p>
                </div>

                <button className="flex w-full items-center">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>

                <button className="flex w-full items-center">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>
              </div>
            }
            classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
          />
          {/* start Horizon PRO */}
          {/* <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            children={
              <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div
                  style={{
                    backgroundImage: `url(${navbarimage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="mb-2 aspect-video w-full rounded-lg"
                />
                <a
                  target="blank"
                  href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >
                  Buy Horizon UI PRO
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                >
                  See Documentation
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                  className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                >
                  Try Horizon Free
                </a>
              </div>
            }
            classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
            animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          /> */}
          <div
            className="cursor-pointer text-gray-600"
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove("dark");
                setDarkmode(false);
              } else {
                document.body.classList.add("dark");
                setDarkmode(true);
              }
            }}
          >
            {darkmode ? (
              <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
          {/* Profile & Dropdown */}
          <Dropdown
            button={
              <img
                className="h-10 w-10 cursor-pointer border-2 border-gray-300 rounded-full"
                src={photo}
                alt="Elon Musk"
              />
            }
            children={
              <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, {name}
                    </p>{" "}
                  </div>
                </div>
                <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                <div className="flex flex-col p-4">
                  <p
                    onClick={showDrawer}
                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white cursor-pointer"
                  >Profile</p>


                  <a
                    href=" "
                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <span

                    onClick={handleLogout}
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 cursor-pointer"
                  >
                    Log Out
                  </span>
                </div>
              </div>
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          />
        </div>
      </nav>





      {/* used for profile form */}
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },

        }}

        extra={
          <Space>
            {/* <Button className="border-2 border-green-400" onClick={onClose}>Cancel</Button> */}

            <button type="reset" class=" ml-4 text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reset</button>

            <button onClick={showModal} class=" ml-4 text-white bg-blueSecondary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Display</button>

            <button type="primary" class=" ml-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800">Delete</button>

          </Space>
        }
      >
        <form action="" onSubmit={handleSubmitProfile}>
          <label for="first_name" class="block mb-2 text-lg text-gray-900 dark:text-black font-medium">Your Id : {maxId + 1}</label>
          <div class="grid gap-6 mb-6 mt-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="block mb-2 text-md text-gray-900 dark:text-black font-medium">Enter your first Name</label>
              <input type="text" id="first_name" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required value={First_Name} onChange={(e) => setFname(e.target.value)}></input>
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your last name</label>
              <input type="text" id="last_name" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" placeolder="Last Name" required value={Last_Name} onChange={(e) => setLname(e.target.value)}></input>
            </div>
            <div>
              <label for="address" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your address</label>
              <input type="text" id="address" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required value={Address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>


            <div>
              <label for="contact" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your contact</label>
              <input type="number" id="contact" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact" required value={Contact} onChange={(e) => setContact(e.target.value)}></input>
            </div>
          </div>

          <div class="grid gap-6  md:grid-cols-2">
            <div>
              <label for="small" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Country Select</label>
              <select id="small" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={Country} onChange={(e) => setCountry(e.target.value)}>
                <option selected>Choose a select</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div>
              <label for="small" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Select Gender</label>
              <select id="small" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={Gender} onChange={(e) => setGender(e.target.value)}>
                <option selected>Choose a select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

          </div>

          <div class="mb-6 mt-6">
            <label for="birthday" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your Birthday</label>
            <input type="date" id="birthday" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required value={Date} onChange={(e) => setDate(e.target.value)}></input>
          </div>

          <div class="mb-6">
            <label for="description" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your description</label>
            <input type="" id="description" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required value={Description} onChange={(e) => setDescription(e.target.value)}></input>
          </div>


          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
          <input onChange={handleFile} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
          <p class="ml-1 mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>





          <button type="submit" class="mt-5 text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>



        </form>




        <FixedPlugin />
      </Drawer>





      {/* used for profile disply */}
      <Modal width={800} title="Display Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        {/* 
        <div>
      <h1>Search User Data by ID</h1>
      <label>Enter User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      
      {userData && (
        <div>
          <h2>User Details</h2>
          <p>First Name: {userData.First_Name}</p>
          <p>Last Name: {userData.Last_Name}</p>
          <p>Address: {userData.Address}</p>
          <p>Contact: {userData.Contact}</p>
          <p>Description: {userData.Description}</p>
          <p>Date: {userData.Date}</p>
          <p>Country: {userData.Country}</p>
          <p>Gender: {userData.Gender}</p>
          <p>
            Image:
            <img
                  src={`http://localhost:8082/${userData.imagePath}`}
                  alt="User"
                  style={{ maxWidth: '100px' }}
                />
          </p>
        </div>
      )}
    </div> */}

        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="please type your id..." required
            value={userId} onChange={(e) => setUserId(e.target.value)}></input>
          <button onClick={handleSearch} type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>





        {userData && (

          <form className="w-full mt-2 border-2 border-bg-blue p-4 rounded-xl  md:mb-8 sm:mb-10">

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div className="">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napa" required
                  value={userData.First_Name} disabled></input>
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Square" required
                  value={userData.Last_Name} disabled></input>
              </div>
              <div class="relative max-w-sm">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your address</label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required
                  value={userData.Address} disabled></input>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your contact number</label>
                <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1/2/3" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                  value={userData.Contact} disabled></input>
              </div>
              <div class="relative max-w-sm">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your country</label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required
                  value={userData.Country} disabled></input>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your gender</label>
                <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1/2/3" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                  value={userData.Gender} disabled></input>
              </div>
            </div>


            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" value={userData.Description} disabled></input>
            </div>  <br></br>


            <figure class="relative w-full border border-red-500 py-10 flex justify-center items-center mx-auto  max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              
            
                <Image
                  className=" object-cover mx-auto rounded-xl"
                  width={250}
                  src={`http://localhost:8082/${userData.imagePath}`}
                  preview={{
                    toolbarRender: (
                      _,
                      {
                        transform: { scale },
                        actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                      },
                    ) => (
                      <Space size={12} className="toolbar-wrapper text-3xl  text-blueSecondary">
                        <DownloadOutlined onClick={onDownload} />
                        <SwapOutlined rotate={90} onClick={onFlipY} />
                        <SwapOutlined onClick={onFlipX} />
                        <RotateLeftOutlined onClick={onRotateLeft} />
                        <RotateRightOutlined onClick={onRotateRight} />
                        <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                        <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                      </Space>
                    ),
                  }}
                />
             

            </figure>





          </form>
        )}





      </Modal>

    </>
  );
};

export default Navbar;
