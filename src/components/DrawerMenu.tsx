"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link as Scroll, scroller, Button } from "react-scroll";
import Link from "next/link";

export default function DrawerMenu(props: any) {
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

  const handleClick = (page: page) => {
    scroller.scrollTo(page.key, {
      duration: 600,
      offset: -50,
      smooth: true,
    });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        {pages.map((page, index) =>
          page.key !== "contact" ? (
            <ListItem key={page.key} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleClick(page);
                  // props.toggleDrawer(true);
                }}
              >
                <ListItemIcon>
                  {/* TODO 適当にアイコン設定する */}
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ) : (
            <Link key={page.key} href={"/contact"}>
              <ListItem key={page.key} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleClick(page);
                    // props.toggleDrawer(true);
                  }}
                >
                  <ListItemIcon>
                    {/* TODO 適当にアイコン設定する */}
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={page.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        {/* <Button onClick={toggleDrawer("left", true)}>{"left"}</Button> */}
        <Drawer
          anchor={"left"}
          open={props.stateDrawer}
          onClose={props.toggleDrawer(false)}
          color="transparent"
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
