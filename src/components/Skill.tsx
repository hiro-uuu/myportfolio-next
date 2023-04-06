"use client";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Rating,
  Typography,
  makeStyles,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import React from "react";
import ProgressBar from "./ProgressBar";

const Skill: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={5}>
          <Grid item xs={12} marginTop={10}>
            <Box maxWidth={400}>
              <Typography variant="h4">触ったことのある技術</Typography>
              <ProgressBar skill="React" value={75} />
              <ProgressBar skill="C# (.Net Core)" value={50} />
              <ProgressBar skill="GIS (地理情報システム)" value={75} />
              <ProgressBar skill="PostgreSQL" value={40} />
              <ProgressBar skill="SQLSever" value={40} />
              <ProgressBar skill="Nginx" value={30} />
              <ProgressBar skill="IIS" value={30} />
              <ProgressBar skill="AWS" value={20} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Skill;
