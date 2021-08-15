import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

export const SignInPage = () => {
  let history = useHistory();
  const [authData, setAuthData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setAuthData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          history.push("/profile");
        } else {
          alert("Неправильно введены данные!");
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Логин"
            name="username"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            name="password"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};
