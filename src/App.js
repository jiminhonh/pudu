import React from "react";
import Task from "./Task";

function App() {
  const tasks = [
    {
      title: "Math Homework",
      deadline: "November 10th, 2020",
      duration: "3 hour",
      subject: "Math"
    },
    {
      title: "Social Homework",
      deadline: "December 10th, 2020",
      duration: "1 hour",
      subject: "Coding"
    },
    {
      title: "Coding Homework",
      deadline: "December 11th, 2020",
      duration: "1 hour",
      subject: "Coding"
    },
    {
      title: "English Homework",
      deadline: "December 23th, 2020",
      duration: "1 hour",
      subject: "Coding"
    }
  ];

  return (
    <div>
      {tasks.map(task => {
        return <Task data={task} />;
      })}
    </div>
  );
}

export default App;
