import React, {useState ,useEffect} from 'react'
import {Modal} from 'antd'

import BannerPrescription from 'views/Prescription/BannerPrescription';

const Ambulance = () => {

   // used for modal for ambulance add
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
     setIsModalOpen(true);
   };
 
   const handleOk = () => {
     setIsModalOpen(false);
   };
 
   const handleCancel = () => {
     setIsModalOpen(false);
   };


  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">

      <div className="col-span-1 h-fit w-full xl:col-span-3 2xl:col-span-3">

        <BannerPrescription></BannerPrescription>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:mt-16 md:mt-7 sm:mt-4">
          <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
              <button  onClick={showModal} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Add
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
              </div>
            </div>

            
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"></input>
            </div>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                Organization Name
                </th>
                <th scope="col" class="px-6 py-3">
                Area
                </th>
                <th scope="col" class="px-6 py-3">
                Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Ambulance  Number
                </th>
               
              </tr>
            </thead>

            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Al-Markazul Islam Ambulance Service</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                  Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  21/17, Babor road, Mohammadpur, Dhaka-1207.
                  </div>
                </td>
                <td class="px-6 py-4">
                9127867, 8114980, 8125549, 01819-732905
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center S px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Anju- Man- E- Mafidul Islam</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Kakrail, Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  (Free Ambulance Service), 42, Anjuman Mofedul Islam Road, Kakrail Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                9336611, 7411660, 7410786, 9355755
                </td>
              </tr>



              <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Apollo Hospitals Dhaka</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Boshundhora
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Plot-81, Block-E, Basundhara R/A, Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                9896623, 01714090000, 01713063067
                </td>
              </tr>




              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Aysha Memorial Speciallised Hospital</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Mohakhali
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Address - 74/G, Pik Square, Mohakhali, Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                9122689-90,8142370-71, 01919372647, 01915490007
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Bangabandhu Sheikh Mujib Medical University	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kabi Nazuril islam Road,Shahabag, Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                8612550-4, 8614545-9
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">BIRDEM Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Shahbagh
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kabi Nazuril islam Road,Shahabag,Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                8616641-50, 9661551, (ex-2211)
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">BNSB, Dhaka Eye Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Mirpur-1, Dhaka-1216, Email: bnsbeye@gmail.com
                  </div>
                </td>
                <td class="px-6 py-4">
                9015344, 8014476, 02-9010831
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">BNSB, Dhaka Eye Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Mirpur-1, Dhaka-1216, Email: bnsbeye@gmail.com
                  </div>
                </td>
                <td class="px-6 py-4">
                9015344, 8014476, 02-9010831
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">BSMMU (PG Hospital)	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Shahbagh
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kabi Nazuril islam Road,Shahabag,Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                8614001
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">CMH (24 Hour Ambulance)	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Combined Military Hospital (C.M.H.) Category: General Hospital  Address : Dhaka Cantonment , Dhaka, Email: dhaka-cmh @ army.mil.bd Web: www.army.mil.bd
                  </div>
                </td>
                <td class="px-6 py-4">
                9871469, 9870011, 8822779, Mobile: +8801769013311(Emergency & Casualty) +8801724-579521
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Comfort Nursing Home (pvt.) Ltd.	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Head Office : Comfort Tower 167/B, Green Road, Dhanmondi Dhaka, Bangladesh. Uttara Branch : Anower Complex (2nd Floor) House #12, Road #14/C, Sector #4, (Near Uttara Thana) Uttara, Dhaka, Bangladesh.
                  </div>
                </td>
                <td class="px-6 py-4">
                Phone : 9135945-8 (Master Line) Mobile : 01731 956033, 01552 468377, 58954726

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Criticare EMS	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Green Road	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  A.K Complex (2nd Fl), 19, Green Road. Dhaka	
                  </div>
                </td>
                <td class="px-6 py-4">
                Mobile : 01731 956033, 01552 468377

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Dagma Diagoanstic Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Badda
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  - Cha - 88/1, Bir Uttom Rafiqul Islam Aveniu, North Badda, Dhaka - 1212/D14	
                  </div>
                </td>
                <td class="px-6 py-4">
                9884346, 8835485,01921088076
                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">BNSB, Dhaka Eye Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Mirpur-1, Dhaka-1216, Email: bnsbeye@gmail.com
                  </div>
                </td>
                <td class="px-6 py-4">
                9015344, 8014476, 02-9010831
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Day-Night Ambulance Service	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                9123073, 8122041, 01711544328
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Dip Clinic & Diagnostic Centre	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Shavar, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Thana Road, Savar, Dhaka	
                  </div>
                </td>
                <td class="px-6 py-4">
                7710066, 7713489, 0171682583
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Fire Service & Civil Defense	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Dhaka
                  </div>
                </td>
                <td class="px-6 py-4">
                9555555, 9556666-7

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">H.A.F. Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Badda, Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Address - Cha - 88/5, Hasenuddin Road,(Puraton Thana Road) ,North Badda,Dhaka - 1212	
                  </div>
                </td>
                <td class="px-6 py-4">
                8858028, 01741331446

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">H.A.F. General Hospital		</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Badda, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  - Cha - 88/5, Hasenuddin Road,(Puraton Thana Road) ,North Badda,Dhaka - 1212/ D26	
                  </div>
                </td>
                <td class="px-6 py-4">
                8858028, 01741331446

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Health Care Centar	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Banani, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  H # 133, R # 12, BL # E, Banani, Dhaka	
                  </div>
                </td>
                <td class="px-6 py-4">
                98977222, 8833389
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Ibrahim Cardiac Hospital & Research Insititute	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Shahbagh, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  (24 Hours Ambulance), Shahbag, Dhaka	
                  </div>
                </td>
                <td class="px-6 py-4">
                1713003004
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Panjeri Hospital Ltd.</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                South Shajahanpur, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  K -11/1, Shajahanpur Busstand, Progati Sharani, Dhaka - 1212	
                  </div>
                </td>
                <td class="px-6 py-4">
                01678074437, 01727360727
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Rafa Medical	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Mohakhali DOHS, Dhaka	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Insurance Academy Bhaban (1st Floor), 53, Mohakhali TB Gate,Dhaka - 1212	
                  </div>
                </td>
                <td class="px-6 py-4">
                Phone: 01975-090807
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Shahabuddin Medical College and Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Gulshan-2	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  R # 113/A, H # 12, Gulshan - 2,Dhaka	                 
                  </div>
                </td>
                <td class="px-6 py-4">
                9862593-4,01716777790-1,01919777790-1

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Modern Ambulance Service	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  PG Hospital 1 no. Gate, Dhaka-1000	  
                  </div>
                </td>
                <td class="px-6 py-4">
                01711450839,01933342273,01924860108

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Desh Ambulance Service	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  82 East Ahmed Nagor, Dhaka 1216	
                  </div>
                </td>
                <td class="px-6 py-4">
                01790-509607

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Ad-Din Medical College Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  2 Bara Maghbazar, Outer Circular Rd, Dhaka 1217
                  </div>
                </td>
                <td class="px-6 py-4">
                01713488411-12

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">AL-MANAR HOSPITAL LTD.	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Plot Umo, Block No. Rossoi, Satmasjid Road, Dhaka 1207	
                  </div>
                </td>
                <td class="px-6 py-4">
                02-9121588

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Islami Bank Hospital Mirpur	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Dhaka
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Plot No 31, Main Road 3, Near Purobi Bus Stop Begum Rokeya sarani, Block B, Dhaka 1216	
                  </div>
                </td>
                <td class="px-6 py-4">
                01992-346634
                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Medical Centre		</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Chittagong	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  953, O.R. Nizam Road, Chittagong	
                  </div>
                </td>
                <td class="px-6 py-4">
                88 031 651054, 651944, 648501-04

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">AFC Health Fortis Heart Institute, Chittagong	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Chittagong	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  12/12, Behind Chevron Clinical Laboratory, Chevron Building, O.R. Nizam Rd, Chittagong 4000	
                  </div>
                </td>
                <td class="px-6 py-4">
                01933-226666

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Imperial Hospital Limited	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Chittagong	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Chittagong Eye Infirmary and Training Complex Campus, Zakir Hossain Rd, Chittagong 4202	
                  </div>
                </td>
                <td class="px-6 py-4">
                031-659040

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Comilla Medical College	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Comilla
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kuchaitoli, Dr Akhtar Hameed Khan Rd, Comilla 3500	
                  </div>
                </td>
                <td class="px-6 py-4">
                0816-5562

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Comilla Medical College	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Comilla
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kuchaitoli, Dr Akhtar Hameed Khan Rd, Comilla 3500	
                  </div>
                </td>
                <td class="px-6 py-4">
                0816-5562

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Comilla Gomti Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Comilla
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Nazrul Avenue, Kandirpar, Comilla	
                  </div>
                </td>
                <td class="px-6 py-4">
                0816-1500,01842-798083


                </td>
              </tr>





              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Eastern Medical College	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Comilla
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Kabila (Dhaka-Chittagong Highway), Burichang-3520, Comilla	
                  </div>
                </td>
                <td class="px-6 py-4">
                +880-1730014800, +880-1717031411. +880-1748800590
                </td>
              </tr>




              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Comilla Diabetic Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Comilla
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Sulivan Road , Bagichagaon near fire brigade pond, Comilla 3500		
                  </div>
                </td>
                <td class="px-6 py-4">
                0816-5145

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Rajshahi Medical College Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Rajshahi
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Medical College Road, Rajshahi 6000	                  </div>
                </td>
                <td class="px-6 py-4">
                0721-775651
                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Islami Bank Medical College Hospital Rajshahi	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Rajshahi
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Medical Road, Rajshahi 6000	
                  </div>
                </td>
                <td class="px-6 py-4">
                01763-930101

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Khulna City Medical College Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Khulna	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  33, KDA Avenue, Hotel Royal Mor, Khulna Sadar, Khulna.	
                  </div>
                </td>
                <td class="px-6 py-4">
                +880-41-725-116,+880-1858-209-392

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Bangladesh Eye Hospital, Khulna	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Khulna	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  9 B, Mojid Shoroni, Shibbari, Khulna - 9100, Bangladesh	
                  </div>
                </td>
                <td class="px-6 py-4">
                01799-209075

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Khulna Medical College Hospital	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Khulna	                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Boyra Main Road, Khulna.		
                  </div>
                </td>
                <td class="px-6 py-4">
                -760303

                </td>
              </tr>



              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Gazi Medical College	 </div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Khulna	  
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  A.19-21, Mojid Sarani, Sonadanga Khulna 9000, Bangladesh.	
                  </div>
                </td>
                <td class="px-6 py-4">
                -1779656722

                </td>
              </tr>


              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">MAG Osmani Medical College		</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Sylhet
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  Osmani Medical, Sylhet	
                  </div>
                </td>
                <td class="px-6 py-4">

                0821-713667

                </td>
              </tr>

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th  class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"></img> */}
                  <div class="ps-3">
                    <div class="text-base font-semibold">Sher e Bangla Medical College	</div>
                    
                  </div>
                </th>
                <td class="px-6 py-4">
                Barishal	
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                  South Alekanda, Band Road, Barisal 8200	
                  </div>
                </td>
                <td class="px-6 py-4">
                0431-2173547
                </td>
              </tr>







              




            </tbody>
          </table>
        </div>





        {/* used for modal */}
        
          {/* <Modal title="Add Medicine" width={800} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <hr className="my-5"></hr>
          <form className="w-full" onSubmit={handleSubmitMedicineData}>
            <div>
              <h3 className="mb-3 text-lg">Medicine Id : '<span className="font-semibold">{maxId + 1}</span>'</h3>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div className="">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter medicine name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napa" required
                  value={name} onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter company name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Square" required
                  value={company} onChange={(e) => setCompany(e.target.value)}></input>
              </div>
              <div class="relative max-w-sm">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire date</label>
                <input type="date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required
                  value={expire_date} onChange={(e) => setExpire_date(e.target.value)}></input>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter dosage</label>
                <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1/2/3" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                  value={dosage} onChange={(e) => setDosage(e.target.value)}></input>
              </div>


            </div>

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required
              value={introduction} onChange={(e) => setIntroduction(e.target.value)}></textarea>


            <label class="block mb-2  mt-6 text-sm font-medium text-gray-900 dark:text-white" >Upload medicine image</label>
            <input onChange={handleFile} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
            <p class="ml-1 mb-3 mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>



            <div class="flex items-start mb-8">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>




            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <button type="reset" class="w-full  ml-3 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>

          </form>
        </Modal> */}

      </div>
    </div>





  )
}

export default Ambulance