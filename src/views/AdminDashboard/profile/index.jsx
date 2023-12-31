import React from "react";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";

const ProfileOverview = () => {


  const [alarmTime, setAlarmTime] = useState('');
  const [alarmDate, setAlarmDate] = useState('');
  const [alarmDay, setAlarmDay] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const alarmDateTime = new Date(`${alarmDate} ${alarmTime}`);

    // Check if the alarm time is in the future
    if (alarmDateTime > currentDate) {
      const timeUntilAlarm = alarmDateTime - currentDate;

      // Set timeout to trigger the alarm
      const alarmTimeout = setTimeout(() => {
        alert('Alarm!'); // You can replace this with your desired action

        // Trigger vibration notification
        if ('vibrate' in navigator) {
          navigator.vibrate([200, 100, 200]); // Vibrate for 200ms, pause for 100ms, vibrate for 200ms
        }
      }, timeUntilAlarm);

      // Clear timeout if the component unmounts or alarm changes
      return () => clearTimeout(alarmTimeout);
    }
  }, [alarmTime, alarmDate]);



  // current time and date
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();







  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-3 2xl:col-span-3">
        {/* NFt Banner */}
        <Banner />


        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Alarm
          </h4>
        </div>


        {/* alarm set */}
        <section class="w-full bg-white dark:bg-gray-900 p-3 sm:p-5 mt-5 rounded-xl antialiased">
          <div class="mx-auto max-w-screen-2xl  ">

            <div>
              <div className="flex items-center justify-center flex-col">
                <h1 className='text-black font-semibold text-3xl'>Current Date and Time</h1>
                <p className='text-black'>{formattedDateTime}</p> <br></br> <br></br>
              </div>
              {/* alarm card */}


              <div class="mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Alarm Time</label>
                  <input type="time" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                  value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)}></input>
                </div>                
                <br />

                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Alarm Date</label>
                  <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                  value={alarmDate} onChange={(e) => setAlarmDate(e.target.value)}></input>
                </div>                
                <br />

                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Alarm Time</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="day" required
                  value={alarmDay} onChange={(e) => setAlarmDay(e.target.value)}></input>
                </div>                
                <br />


              </div>

            </div>
          </div>
        </section>


      </div>

      {/* right side section */}


    </div>
  );
};

export default ProfileOverview;
