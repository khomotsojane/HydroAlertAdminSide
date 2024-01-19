import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  formContainer: {
    width: "400px",
    padding: theme.spacing(2),
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "#f3f3f3",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
    backgroundColor: "#ff5722",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = ({ onLogin }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(username, password);
      onLogin();
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h4">Login Page</Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              type="text"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;
