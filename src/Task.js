import React, { useState } from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  
`

const TaskWrapper = styled.div`
  background-color: #a0d9a2;
  width: 200px;
  height: 60px;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  text-align: center;

  :hover {
    box-shadow: 5px 5px 10px #888888;
  }
`;

const TitleContainer = styled.div`
  background-color: white;
  font-weight: bold;
`;

const Task = prop => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("");
    console.log(prop.data);
  };

  const data = prop.data || {};

  return (
    <TaskContainer>
      <TaskWrapper onClick={handleClick}>
        <TitleContainer>{data.title}</TitleContainer>
        <div>{data.deadline}</div>
        <div>{data.duration}</div>
        {text}
      </TaskWrapper>
    </TaskContainer>
  );
};

export default Task;
