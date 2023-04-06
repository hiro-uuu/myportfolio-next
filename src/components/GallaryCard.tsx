import React from "react";

/** Material UI Modules */
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

type GallaryCardProps = {
  url: string;
  name: string;
  description: string;
  title: string;
  media: string;
};

const GallaryCard = (props: GallaryCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        minHeight: 540,
        height: "65vh",
        margin: "0 10px 30px 10px",
      }}
    >
      {/* <Link
        to={props.url}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      > */}
      <CardActionArea href={props.url}>
        <CardMedia
          component="img"
          alt={props.name}
          height={230}
          image={props.media}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              padding: "20px 0 20px 0",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              padding: "0 10px 10px 10px",
              minHeight: "25vh",
              textAlign: "left",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GallaryCard;
