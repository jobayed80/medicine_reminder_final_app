import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import InputField from 'components/fields/InputField';
import { FcGoogle } from "react-icons/fc";
import Checkbox from 'components/checkbox';

import authImg from "assets/img/auth/banner.jpg";
import Footer from 'components/footer/FooterAuthDefault';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';

// /used DRAWER
import { Drawer, Modal, Button } from 'antd';




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
import src from "tailwindcss-rtl";



const Read = () => {
  const [modalShow, setModalShow] = React.useState(false);





  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const { id } = useParams();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    setOpen(true)
    axios.get("http://localhost:8082/medicinedetails/" + id)
      .then(res => {
        // console.log(res)
        setMedicines(res.data[0]);
      })
      .catch(err => console.log(err))
  }, []);



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


  return (


    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Link to="/admin/medicine" className="mt-0 w-max lg:pt-10">
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
                      Back to Medicine
                    </p>
                  </div>
                </Link>


                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                  {/* Sign in section */}
                  <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                    <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                      Read Medicine
                    </h4>

                    <form className="w-full mt-2 border-2 border-bg-blue p-4 rounded-xl  md:mb-8 sm:mb-10">


                      <div class="mb-5">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicine Id</label>
                        <input disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={medicines.Id}></input>
                      </div>

                      <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div className="">
                          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter medicine name</label>
                          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napa" required
                            value={medicines.name} disabled></input>
                        </div>
                        <div>
                          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter company name</label>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Square" required
                            value={medicines.company} disabled></input>
                        </div>
                        <div class="relative max-w-sm">
                          <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire date</label>
                          <input type="date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required
                            value={medicines.expire_date} disabled></input>
                        </div>
                        <div>
                          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter dosage</label>
                          <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1/2/3" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                            value={medicines.dosage} disabled></input>
                        </div>


                      </div>

                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hostory</label>
                      <textarea id="message" rows="4" class="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required
                        value={medicines.introduction} disabled></textarea>

                      <figure class="relative flex justify-center items-center mx-auto rounded-full max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <a href="#">
                          <Image
                          className="w-[300px] h-[300px] object-cover mx-auto rounded-full"
                            // width={200}/
                            src={`http://localhost:8082/${medicines.imagePath}`}
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

                        </a>

                      </figure>






                    </form>

                  </div>
                </div>

                {/* <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes> */}
                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div
                    className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                    style={{ backgroundImage: `url(${authImg})` }}
                  />
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

export default Read