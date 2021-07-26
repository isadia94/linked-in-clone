import React from "react";
import styled from "styled-components";

const InteractionContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  padding: 10px 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: whitesmoke;
    border-radius: 5px;
  }

  h4 {
    margin: 0 20px 0 10px;
    font-size: 14px;
  }
`;
function InteractionOption({ Icon, title }) {
  return (
    <InteractionContainer>
      <Icon />
      <h4>{title}</h4>
    </InteractionContainer>
  );
}

export default InteractionOption;
