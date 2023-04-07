import * as React from "react";

import Typography from "@mui/material/Typography";
import GallaryCard from "./GallaryCard";
import { Box, Container, Grid } from "@mui/material";

const Gallary: React.FC = () => {
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid item xs={12} marginTop={10}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Typography variant="h4">製作物など</Typography>
          </div>
          <GallaryCard
            url={"https://myportfolio-next-git-main-hiro-uuu.vercel.app/"}
            name={"ポートフォリオ"}
            description={
              "初めて作成したポートフォリオサイトです。あまり時間をかけず1週間程度で作成しました。興味のあったNext.jsと、使用経験のあるMUIで作成しています。デプロイ環境はVercelを使いました。"
            }
            title={"ポートフォリオサイト"}
            media="/portfolio.png"
          />
          <GallaryCard
            url={""}
            name={""}
            description={"随時追加予定です"}
            title={"・・・・"}
            media=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Gallary;
