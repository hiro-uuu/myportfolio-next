"use client";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@mui/material";
// import { styled, Theme } from "@mui/material/styles";
import React from "react";
// import ProfileImage from "../assets/profile.jpg";
import Image from "next/image";
import { relative } from "path";
import { Height } from "@mui/icons-material";

const Profile: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyItems={"center"}
          justifyContent={"center"}
          spacing={5}
        >
          <Grid item xs={12} md={12} textAlign={"center"} marginTop={10}>
            <Typography variant="h4">プロフィール</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Avatar
                alt="profile"
                src="/profile.jpg"
                sx={{ width: 150, height: 150 }}
                style={{ textAlign: "center" }}
              />
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Typography variant="h5">hiro-uuu</Typography>
            </div>
            <div
              style={{ justifyContent: "center", display: "flex" }}
              onClick={() => {
                location.href = "https://github.com/hiro-uuu ";
              }}
            >
              <Avatar
                alt="github"
                variant="circular"
                src="/github-mark.png"
                sx={{ width: 50, height: 50 }}
                style={{ textAlign: "center" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Typography variant="h5">自己紹介</Typography>
            </div>
            <Typography variant="body1" gutterBottom>
              年齢: 26才 <br />
              趣味 <br />
              ・ ラジオ鑑賞 <br />
              ・ 犬とたわむれること <br />
              ・ 掃除 <br />
              ・ 愛車のJimnyJB64とドライブ <br />・ ゲーム(ポケモンユナイト)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Typography variant="h5">経歴</Typography>
            </div>
            <Typography variant="body1" gutterBottom>
              1996年11月 福岡に生まれる <br />
              2021年3月 福岡大学大学院理学研究科 地球圏化学専攻を卒業
              <br />
              2021年4月
              就職を機に大分県に移住、Webアプリケーション開発業務に従事
              <br />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Typography variant="h5">メッセージ</Typography>
            </div>
            <Typography variant="body1" gutterBottom>
              ご覧いただきまして、ありがとうございます。 <br />
              この度、自身のエンジニアとしてのキャリアアップを求め、転職活動を行うこととなりました。
              <br />
              転職活動を行うにあたって、簡単にではありますがポートフォリオサイトを作成してみました。
              <br />
              主にReact(TypeScript)でのフロントエンドの開発をこれまで行ってまいりましたが、分野に捉われず幅広く技術を身につけていければと考えています。
              <br />
              地図アプリケーションの作成に幅広く携わりました。Webに埋め込む地図ライブラリ（OpenLayers,
              Leaflet）や、GISエンジン（GeoServer, ArcGIS,
              GeognoSIS）も触ってきました。
              <br />
              エンジニア歴は3年目で、まだまだ若輩者ではございますが、どうぞよろしくお願いします。
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
