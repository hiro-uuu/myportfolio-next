"use client";
import { useMail } from "@/hooks/useMail";
import { Send } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import React, { ChangeEvent, FormEventHandler } from "react";

type sendData = {
  company: string;
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [sendData, setSendData] = React.useState<sendData>({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const [openSending, setOpenSending] = React.useState(false);
  const [openComplete, setOpenComplete] = React.useState(false);
  const [openFailed, setOpenFailed] = React.useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setOpenSending(true);
    // Submit form code goes here
    send(sendData).then((res) => {
      console.log("res");
      console.log(res);
      res === 200 ? setOpenComplete(true) : setOpenFailed(true);
    });
  };

  const { send } = useMail();

  const handleChange: any = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const targetprop = event.target.name;
    const updateVal = event.target.value;

    setSendData((prev) => ({ ...prev, [targetprop]: updateVal }));
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSending(false);
    setOpenComplete(false);
  };

  return (
    <>
      {/* <Box
        sx={{
          textAlign: "center",
          width: "50%",
          // alignItems: "center",
          // // justifyContent: "center",
          // display: "block",
        }}
        display="block"
        justifyContent="center"
        alignItems="center"
      > */}
      <Container
        fixed
        sx={{
          textAlign: "center",
          width: "50%",
          minWidth: 350,
          // alignItems: "center",
          // // justifyContent: "center",
          // display: "block",
          // margin: 5,
        }}
      >
        <Typography variant="h4">お問い合わせ</Typography>
        <Typography variant="subtitle1">
          連絡をご希望の方は、こちらからご送信をお願いいたします。
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="company"
                name="company"
                label="会社名"
                // value={name}
                onChange={handleChange}
                style={{ width: "75%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="お名前"
                // value={name}
                onChange={handleChange}
                style={{ width: "75%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                // value={email}
                style={{ width: "75%" }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                name="message"
                label="メッセージ"
                multiline
                rows={4}
                // value={message}
                style={{ width: "75%" }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // className={classes.button}
                endIcon={<Send />}
              >
                送信
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* </Box> */}
      </Container>
      <Snackbar
        open={openSending}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          送信中です。
        </Alert>
      </Snackbar>
      <Snackbar
        open={openComplete}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          送信しました。
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFailed}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          送信に失敗しました。
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
