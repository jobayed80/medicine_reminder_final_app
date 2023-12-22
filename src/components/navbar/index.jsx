import React from "react";
// server
import axios from 'axios'

// sweetalert notification
import Swal from 'sweetalert2'
import { useEffect } from "react";

import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";


// used for profile form
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;







const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);


  // used for profile form
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    // Id: "",
    First_Name: "",
    Last_Name: "",
    Address: "",
    Contact: "",
    Description: "",
    Date: "",
    Country: "",
    Gender: ""
  })

  const handleSubmitProfile = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8082/create_profile', values)
      .then(res => {
        console.log(res)
        console.log("inserted")
      })
      .catch(err => console.log(err))
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
    onClose()
    // window.location.reload();

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
          <Dropdown
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
          />
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
                src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/334811276_1356067541844945_386734669044466370_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE3h9Hp7XnAlO4jupmw3NefZRkXgumTnmNlGReC6ZOeY9-m3A-Dd48HtkMMRarSBXkmT1KHrtb3stAfp9gsbA5S&_nc_ohc=6BSfsi1S5X8AX-60Ka4&_nc_ht=scontent.fdac136-1.fna&oh=00_AfAK2qRLsunnil8qIiOOQSINN_t3HK4CTLNOJcDfa5_q_Q&oe=6585A68C"
                alt="Elon Musk"
              />
            }
            children={
              <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, Adela
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
                  <a
                    href=" "
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  >
                    Log Out
                  </a>
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
            <Button className="border-2 border-green-400" onClick={onClose}>Cancel</Button>

          </Space>
        }
      >
        <form action="" onSubmit={handleSubmitProfile}>
          <label for="first_name" class="block mb-2 text-lg text-gray-900 dark:text-black font-medium">Your Id : </label>
          <div class="grid gap-6 mb-6 mt-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="block mb-2 text-md text-gray-900 dark:text-black font-medium">Enter your first Name</label>
              <input type="text" id="first_name" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required onChange={e => setValues({ ...values, First_Name: e.target.value })}></input>
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your last name</label>
              <input type="text" id="last_name" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" placeolder="Last Name" required onChange={e => setValues({ ...values, Last_Name: e.target.value })}></input>
            </div>
            <div>
              <label for="address" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your address</label>
              <input type="text" id="address" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required onChange={e => setValues({ ...values, Address: e.target.value })}></input>
            </div>


            <div>
              <label for="contact" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your contact</label>
              <input type="number" id="contact" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact" required onChange={e => setValues({ ...values, Contact: e.target.value })}></input>
            </div>
          </div>

          <div class="grid gap-6  md:grid-cols-2">
            <div>
              <label for="small" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Country Select</label>
              <select id="small" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={e => setValues({ ...values, Country: e.target.value })}>
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
                onChange={e => setValues({ ...values, Gender: e.target.value })}>
                <option selected>Choose a select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

          </div>




          <div class="mb-6 mt-6">
            <label for="birthday" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your Birthday</label>
            <input type="date" id="birthday" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required onChange={e => setValues({ ...values, Date: e.target.value })}></input>
          </div>
          <div class="mb-6">
            <label for="description" class="block mb-2 text-md font-medium text-gray-900 dark:text-black">Enter your description</label>
            <input type="" id="description" class="bg-white border h-12 border-gray-300 text-black text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required onChange={e => setValues({ ...values, Description: e.target.value })}></input>
          </div>


          <button type="submit" class="mt-5 text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          <button type="reset" class="mt-5 ml-4 text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reset</button>


          <button type="primary" class="mt-5 ml-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800">Delete</button>

        </form>
      </Drawer>

    </>
  );
};

export default Navbar;
