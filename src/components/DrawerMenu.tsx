"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function DrawerMenu(props: any) {
  //   /**
  //    *
  //    * @param anchor ドロワーメニューを開閉します。
  //    * @param open
  //    * @returns
  //    */
  //   const toggleDrawer =
  //     (anchor: Anchor, open: boolean) =>
  //     (event: React.KeyboardEvent | React.MouseEvent) => {
  //       if (
  //         event.type === "keydown" &&
  //         ((event as React.KeyboardEvent).key === "Tab" ||
  //           (event as React.KeyboardEvent).key === "Shift")
  //       ) {
  //         return;
  //       }

  //       setState({ ...state, [anchor]: open });
  //     };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        {["ホーム", "プロフィール", "スキル", "ギャラリー"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* TODO 適当にアイコン設定する */}
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
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
