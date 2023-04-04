"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DrawerMenu from "@/components/DrawerMenu";
import MenuBar from "@/components/MenuBar";
import Header from "@/components/Header";
import React from "react";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import Gallary from "@/components/Gallary";
import Career from "@/components/Career";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <MenuBar toggleDrawer={toggleDrawer} />
        <Header />
        <DrawerMenu toggleDrawer={toggleDrawer} stateDrawer={stateDrawer} />
        <Profile />
        <Skill />
        <Career />
        <Navbar />
        <Gallary />
        {/* <main>{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}
