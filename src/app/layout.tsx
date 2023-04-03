import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DrawerMenu from "@/components/DrawerMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <DrawerMenu />
        <Navbar />
        {/* <main>{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}
