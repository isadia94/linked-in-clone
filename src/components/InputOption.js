import React from "react";
import styled from "styled-components";

const InputOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  transition: 0.3s ease-in-out;
  h4 {
    margin-left: 10px;
    color: gray;
    font-size: 14px;
  }

  &:hover {
    background-color: whitesmoke;
    border-radius: 5px;
  }
`;
const InputOption = ({ Icon, title, color }) => {
  return (
    <InputOptionContainer>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </InputOptionContainer>
  );
};

export default InputOption;
