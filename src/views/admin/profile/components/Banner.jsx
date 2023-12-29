import React from "react";
import { useState, useEffect } from "react";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";


import axios from "axios";



const Banner = () => {

  const [latestData, setLatestData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8082/latestDataProfile');
        setLatestData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-44 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[130px] w-[130px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          {/* <img className="h-full w-full rounded-full" src={avatar} alt="" /> */}
          {latestData.map(function fn(row) {
          return (

            <img className="h-full w-full rounded-full object-cover" src={`http://localhost:8082/${row.imagePath}`} alt="" />

          )
        })}
        </div>

      </div>



    </Card>


  );
};

export default Banner;
