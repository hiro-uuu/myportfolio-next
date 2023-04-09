"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Pets } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import {
  Button,
  Container,
  Link,
  MenuItem,
  Theme,
  useTheme,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useRef } from 'react';
import { Link as Scroll } from "react-scroll";

export default function MenuBar(props: any) {
  type page = {
    label: string;
    key: string;
  };

  const pages: page[] = [
    { label: "プロフィール", key: "profile" },
    { label: "スキル", key: "skill" },
    { label: "ギャラリー", key: "gallary" },
    { label: "お問い合わせ", key: "contact" },
  ];

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton color="primary" onClick={props.toggleDrawer(true)}>
              <Pets sx={{ display: { md: "flex" }, mr: 1 }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              hiro-uuu
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(
                (page) => (
                  // page.key === "contact" ? (
                  //   <Link key={page.key} href={"/contact"}>
                  //     <Button
                  //       key={page.key}
                  //       sx={{ my: 2, color: "white", display: "block" }}
                  //     >
                  //       {page.label}
                  //     </Button>
                  //   </Link>
                  // ) : (
                  <Button key={page.key}>
                    <Scroll
                      to={page.key}
                      smooth={true}
                      duration={600}
                      offset={-50}
                      className="font-medium text-[#008c8d] hover:opacity-50 hover:cursor-pointer"
                    >
                      {page.label}
                    </Scroll>
                  </Button>
                )
                // )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <div style={{ height: 50 }} /> */}
    </>
  );
}
