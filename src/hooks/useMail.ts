import { useState } from "react";

export const useMail = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    const data = { name: name, message: message };
    console.log(data);
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  return {
    setName,
    setMessage,
    send,
  };
};
