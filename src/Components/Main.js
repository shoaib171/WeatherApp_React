/** @format */

import React from "react";
import Logo from "../images/logo.png";

import { Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
const Main = () => {
  const [inputValue, setInputValue] = useState();
  const [ApiData, SetApiData] = useState({});
  const HandleSubmit = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const HandleSearch = () => {
    WeatherResponse(inputValue);
    setInputValue("");
  };
  const WeatherResponse = (cityName) => {
    const ApiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      " &appid=24f057125bde3b353e98673e515b4a22";
    axios
      .get(ApiUrl)
      .then((response) => {
        console.log(response.data, "Response");
        SetApiData(response.data);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  return (
    <>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        container
        className="Header_Bg"
      >
        <Grid item lg={12} md={12} sm={12} xs={12} className="Header_Grid">
          <TextField
            variant="outlined"
            type="text"
            label="Enter City Name"
            value={inputValue}
            onChange={HandleSubmit}
          />
          <br />
          <Button
            variant="contained"
            style={{
              width: "220px",
              margin: "10px 0px",
            }}
            onClick={HandleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {Object.keys(ApiData).length > 0 && (
        <Grid item container className="Card_Design">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <img src={Logo} />
            <h2> {ApiData?.name}</h2>
            <p>{(ApiData?.main?.temp - 273.15).toFixed(2)}°C</p>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Main;
