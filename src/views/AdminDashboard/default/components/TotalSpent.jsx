import React from "react";
import { useState, useEffect } from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";



const TotalSpent = () => {


   //  view all data for medicine
   const [data, setData] = useState([]);
   useEffect(() => {
     // Fetch data from Node.js server
     fetch('http://localhost:8082/lastdataMedicine')
       .then((response) => response.json())
       .then((result) => setData(result))
       .catch((error) => console.error('Error fetching data:', error));
   }, []);

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">Medicine</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      {/* <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            $37.5K
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Total Spent</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div> */}

<div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-white uppercase bg-blueSecondary dark:bg-gray-700 dark:text-black">
                    <tr>
                      
                      <th scope="col" class="p-4">medicine id</th>
                      <th scope="col" class="p-4">medicine name</th>
                      <th scope="col" class="p-4">company</th>
                      <th scope="col" class="p-4">Expire date</th>
                      <th scope="col" class="p-4">dosage</th>
                      <th scope="col" class="p-4">introduction</th>
                      <th scope="col" class="p-4">image</th>

                    </tr>
                  </thead>
                  <tbody>

                    {data.map(function fn(row) {
                      return (
                        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          

                          <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.Id}
                          </th>

                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.name}
                          </td>

                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">


                            {row.company}

                          </td>


                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.expire_date}
                          </td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.dosage}
                          </td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {row.introduction}
                          </td>
                          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-2xl">
                            <img className="h-20 w-20 object-contain rounded-2xl" src={`http://localhost:8082/${row.imagePath}`}></img>
                          </td>

                          
                        </tr>

                      );

                    }

                    )}

                  </tbody>
                </table>


              </div>
    </Card>
  );
};

export default TotalSpent;
