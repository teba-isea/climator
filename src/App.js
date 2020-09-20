import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [weatherData, setWeatherData] = useState({});

  const [consultApi, setConsultApi] = useState(false);

  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const queryWeatherOf = async (city, country) => {
      try {
        const req = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=47fe124aea5e05a6c354588b50385f2f`
        );
        const res = await req.json();
        setWeatherData(res);
        setError(false);
        setTimeout(() => {
          setConsultApi(false)
        }, 1000);;
      } catch {
        setError(true);
        setConsultApi(false);
      }
    };
    if (consultApi) queryWeatherOf(city, country);
  }, [consultApi]);

  return (
    <Fragment>
      <Header title={"ClimatorApp"} />
      <div className="container">
        <div className="row padding-3">
          {error ? (
            <Error message={"Connection error, please check your Network"} />
          ) : null}
          <div className="col m6 s12">
            <Form setSearch={setSearch} setConsultApi={setConsultApi} />
          </div>
          <div className="col m6 s12">
            {consultApi ? <Spinner /> : <Weather weatherData={weatherData} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;