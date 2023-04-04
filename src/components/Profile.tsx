"use client";
import { Grid, Typography, makeStyles } from "@mui/material";
// import { styled, Theme } from "@mui/material/styles";
import React from "react";
// import ProfileImage from "../assets/profile.jpg";
import Image from "next/image";
import { relative } from "path";
import { Height } from "@mui/icons-material";

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

const Profile: React.FC = () => {
  return (
    <>
      <Typography variant="h3">プロフィール</Typography>
      <div style={{ position: "relative", width: 200, height: 100 }}>
        <Image src={"/profile.jpg"} alt="Picture of the author" fill></Image>
      </div>
      プロフィール
    </>
  );
};

export default Profile;
