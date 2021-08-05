import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.div`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  text-decoration: none;
  color: white;
  cursor: pointer;
  background-color: #05164d;
`;

const Button = () => {
  return (
    <Link to="sign-up">
      <Btn>Sign Up</Btn>
    </Link>
  );
};

export default Button;
