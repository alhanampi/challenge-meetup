import axios from "axios";
import React, { useEffect, useState } from "react";
// const key = process.env.REACT_APP_CLIMATE_KEY;

const UtilClimate = () => {
  const [weather, setWeather] = useState("");
  const city = encodeURIComponent("Buenos Aires");
  const country = encodeURIComponent("AR")
  const key = "f2a43010c1d146ce9235d14cabf8142e";

  //16 is the maximum amount of days you can get from the api
  const API_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=16`;
//   console.log(API_URL);

  const getClimate = async () => {
    const config = {
        header: {
          "Content-Type": "application/json",
        }
    }
        try {
            const res = await axios.get(API_URL, config)
            .then(() => {
                console.log(res.data);
                setWeather(res.data);
                console.log(weather);
              })
            
        } catch (error) {
            console.log(error)
        }
    }

getClimate()
  return <div>api</div>;
};

export default UtilClimate;
