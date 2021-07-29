import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";

const LoginHeader = styled.div`
  padding: 0px 150px;
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 60px;
    width: 500px;
    color: #77a9dd;
    line-height: 60px;
    font-weight: 300;
  }
`;
const LoginNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: -20px;
  justify-content: space-between;
`;
const LoginNavLogo = styled.img`
  height: 100px;
  object-fit: contain;
`;
const LoginNavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const LoginBody = styled.div`
  margin-top: 10px;
  padding: 0px 150px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 15px 10px;
    width: 350px;
    outline: none;
    border: 1px solid gray;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LoginHeader>
        <LoginNav>
          <LoginNavLogo src={Logo} />
          <LoginNavMenu>
            <p>Join Now</p>
            <p
              style={{
                marginLeft: "20px",
                color: "blue",
                border: "1px solid blue",
                padding: "10px 15px",
                borderRadius: "99px",
              }}
            >
              Sign in
            </p>
          </LoginNavMenu>
        </LoginNav>

        <h1>Welcome to your professional community</h1>
      </LoginHeader>
      <LoginBody>
        <form>
          <input
            placeholder="Email or Phone"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={{ marginBottom: "20px" }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p style={{ color: "gray", marginBottom: "20px" }}>
            Forgot Password?
          </p>

          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              width: "350px",
              padding: "15px 10px",
              borderRadius: "999px",
              border: "0.8px solid gray",
              backgroundColor: "rgb(10,102,194)",
              color: "white",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Sign in
          </button>
        </form>

        <p style={{ textAlign: "center" }}>Or</p>
        <button
          style={{
            width: "350px",
            padding: "15px 10px",
            borderRadius: "999px",
            border: "1px solid gray",
            color: "gray",
            fontSize: "18px",
          }}
        >
          Sign in with Google
        </button>
      </LoginBody>
    </>
  );
};

export default Login;
