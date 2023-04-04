"use client";
import { Grid, Typography, makeStyles } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import React from "react";
import Background from "../assets/header.png";

const HeaderContent = styled(Grid)({
  // backgroundImage: `/header.png`,
  backgroundImage: `url(${Background.src}/)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "50vh", // ヘッダーの高さを設定
  // [theme.breakpoints.down("sm")]: {
  //   // ブレイクポイントでスタイルを変更
  //   height: "30vh",
  // },
});

const Header: React.FC = () => {
  return (
    <HeaderContent container>
      {/* <Typography variant="h3">あいうえお</Typography> */}
      {/* <Grid item xs={12} sm={6}>
     
      </Grid> */}
    </HeaderContent>
  );
};

export default Header;
