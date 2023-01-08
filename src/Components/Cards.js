/** @format */

import React from "react";
import Logo from "../images/logo.png";
import { Grid } from "@mui/material";

const Cards = () => {
  return (
    <Grid item container className="Card_Design">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <img src={Logo} />
        <h2>Lahore</h2>
        <p>12 C</p>
      </Grid>
    </Grid>
  );
};

export default Cards;
