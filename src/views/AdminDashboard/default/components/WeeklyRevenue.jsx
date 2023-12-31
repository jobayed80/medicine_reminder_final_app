import Card from "components/card";
import { useState, useEffect } from "react";
import BarChart from "components/charts/BarChart";
import axios from "axios";

import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";

const WeeklyRevenue = () => {


  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from Node.js server
    fetch('http://localhost:8082/lastdataPrescription')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);



  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
     
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdBarChart />
          <span className="text-sm font-medium text-gray-600">Prescription</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      {/* <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartDataWeeklyRevenue}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div> */}

      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="bg-blueSecondary text-xs text-white uppercase dark:bg-gray-700 dark:text-black" >
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                  <label for="checkbox-all" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="p-4">medicine id</th>
              <th scope="col" class="p-4">image</th>
              <th scope="col" class="p-4">medicien name</th>
              <th scope="col" class="p-4">doctor name</th>
              <th scope="col" class="p-4">doctor notes</th>


            </tr>
          </thead>
          <tbody>

            {data.map(function fn(row) {
              return (
                <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="p-4 w-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                  </td>

                  <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.Id}
                  </th>

                  <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-2xl">
                    <img className="h-20 w-20 object-contain rounded-2xl" src={`http://localhost:8082/${row.imagePath}`}></img>
                  </td>

                  <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">


                    {row.medical_name}

                  </td>


                  <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.doctor_name}
                  </td>
                  <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.doctor_notes}
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

export default WeeklyRevenue;
