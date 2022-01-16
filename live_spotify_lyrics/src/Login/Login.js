import React from "react";
import "./Login.css";

function Login() {
  const imageURL = require("../assets/Spotify_Logo_RGB_White.png");
  const oauthLogin = () => {
    window.location.href = "http://localhost:8888/login";
  }

  return (
    <div className="login" onClick={oauthLogin}>
      <img className="login__image" src={imageURL} alt="" />
      <div className="verticalDivider"></div>
      <a className="login__link" href="http://localhost:8888/login">
        Log in with Spotify
      </a>
    </div>
  );
}

export default Login;
