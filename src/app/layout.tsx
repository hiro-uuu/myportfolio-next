"use client";

import "./globals.css";
import Footer from "../components/Footer";
import DrawerMenu from "@/components/DrawerMenu";
import MenuBar from "@/components/MenuBar";
import React from "react";
import { Avatar, Fab, IconButton } from "@mui/material";
import { ArrowUpward, ArrowUpwardRounded } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// ダークモードならtrue、そうでなければfalse
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const darkTheme = createTheme({
  palette: {
    mode: isDark ? "dark" : "light",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   *
   * @param anchor ドロワーメニューを開閉します。
   * @param open
   * @returns
   */
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setStateDrawer(open);
    };
  const [stateDrawer, setStateDrawer] = React.useState(false); //ドロワーの表示状態です。
  const [showButton, setShowButton] = React.useState(false);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <MenuBar toggleDrawer={toggleDrawer} />
          <DrawerMenu toggleDrawer={toggleDrawer} stateDrawer={stateDrawer} />
          {children}
          <Fab
            color="primary"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "16px",
              display: showButton ? "inline-flex" : "none",
            }}
            onClick={handleButtonClick}
          >
            <ArrowUpward />
          </Fab>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
