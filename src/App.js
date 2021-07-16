// https://github.com/bradtraversy/react-crash-2021

import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Medical Appointment",
      day: "16 Jul at 3pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Book Next Medical Appointment",
      day: "20 Dec at 8am",
      reminder: true,
    },
    {
      id: 3,
      text: "Dental Appointment",
      day: "16 Mar at 9am",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header title="Tasks" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
