import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { TextField, Button, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: theme.spacing(2, 0),
  },
  sentMessageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  receivedMessageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: theme.spacing(1),
  },
  sentMessage: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    maxWidth: "70%",
    wordWrap: "break-word",
  },
  receivedMessage: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    maxWidth: "70%",
    wordWrap: "break-word",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  textField: {
    marginRight: theme.spacing(2),
  },
}));

function Chats() {
  const classes = useStyles();

  const [chats, setChats] = useState([]);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const chatsRef = firebase.database().ref("chats");
    chatsRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatArray = Object.values(chatData);
        setChats(chatArray);
      } else {
        setChats([]);
      }
    });
  }, []);

  const handleChatTextChange = (e) => {
    setChatText(e.target.value);
  };

  const handleSendChat = () => {
    if (chatText.trim() !== "") {
      const chatsRef = firebase.database().ref("chats");
      const newChatRef = chatsRef.push();
      newChatRef.set({
        message: chatText,
        senderID: "YOUR_SENDER_ID", // Replace with your sender ID or remove this line if not needed
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
      setChatText("");
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4">Chats</Typography>

      <div className={classes.chatContainer}>
        {chats.map((chat) => (
          <div
            key={chat.timestamp}
            className={
              chat.senderID
                ? classes.receivedMessageContainer
                : classes.sentMessageContainer
            }
          >
            <Paper
              className={
                chat.senderID ? classes.receivedMessage : classes.sentMessage
              }
            >
              {chat.message}
            </Paper>
          </div>
        ))}
      </div>

      <div className={classes.inputContainer}>
        <TextField
          label="Enter your message"
          value={chatText}
          onChange={handleChatTextChange}
          className={classes.textField}
        />
        <Button variant="contained" color="primary" onClick={handleSendChat}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chats;