import axios from "axios";

export const UtilClimate = () => {
  const city = encodeURIComponent("Buenos Aires");
  const country = encodeURIComponent("AR")
  const key = "f2a43010c1d146ce9235d14cabf8142e";

  //16 is the maximum amount of days you can get from the api
  const API_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${key}&days=16`;
  console.log(API_URL.data);

  const getClimate = async () => {
    const config = {
        header: 'x-auth-token',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
        try {
            const res = await axios.get(API_URL, config)
            .then(() => {
                console.log(res.data);
                const weather = res.data
                console.log(weather[0].temp);
              })
            
        } catch (error) {
            console.log(error)
        }
    }

getClimate()
};

