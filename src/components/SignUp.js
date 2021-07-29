import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;

  h5 {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  p {
    font-size: 12px;
    width: 270px;
    margin-bottom: 20px;

    span {
      color: #0074b1;
    }
  }
`;
const SignUpLogo = styled.img`
  height: 100px;
  object-fit: contain;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 10px;
    width: 350px;
    margin-bottom: 20px;
    border: 0.9px solid gray;
    outline: none;
  }

  label {
    color: gray;
    margin-bottom: 4px;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please Enter your e-mail address or phone number");
    } else if (!password) {
      alert("Please Enter your password");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: email,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <SignUpContainer>
      <SignUpLogo src={Logo} />
      <h5>Make the most of your professional life</h5>
      <form>
        <Input>
          <label>Email or phone number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input>
        <Input>
          <label>Password (6 or more character)</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>

        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span>User Agreement, Privacy Policy, </span>and
          <span>Cookie Policy</span>
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
          Agree & Join
        </button>
      </form>
      <p style={{ textAlign: "center" }}>Or</p>

      <button
        style={{
          width: "350px",
          padding: "15px 10px",
          borderRadius: "999px",
          border: "0.8px solid gray",

          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        Join With Google
      </button>

      <p style={{ textAlign: "center" }}>
        Already on LinkedIn? <span>Sign In</span>
      </p>
    </SignUpContainer>
  );
};

export default SignUp;
