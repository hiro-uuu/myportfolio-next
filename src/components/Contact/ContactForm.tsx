"use client";
import { Button, Grid, TextField, Typography, makeStyles } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import React from "react";
import Background from "../assets/header.png";

const ContactForm: React.FC = () => {
  // const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form code goes here
  };

  return (
    <>
      問い合わせフォーム
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={handleMessageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // className={classes.button}
            >
              送信
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ContactForm;
