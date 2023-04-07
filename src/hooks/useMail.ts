export const useMail = () => {
  type sendData = {
    company: string;
    name: string;
    email: string;
    message: string;
  };

  async function send(sendData: sendData) {
    let status = 0;
    await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }).then((response) => {
      status = response.status;
    });
    return status;
  }

  return {
    send,
  };
};
