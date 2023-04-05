"use client";
import { LinearProgress } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import React from "react";

type ProgressBarProps = {
  skill: string;
  value: number;
};

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div style={{ margin: 10 }}>
      <div>{props.skill}</div>
      <LinearProgress variant="determinate" value={props.value} />
    </div>
  );
};

export default ProgressBar;
