// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Hello Welcome, User!</p> : <p>Access done</p>}</div>;
}

export default LoginMessage;
