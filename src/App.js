// https://github.com/bradtraversy/react-crash-2021

import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/Add";

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

  // Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Deleted", id);
  };

  // Double click
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("Toggle remainder, ", id);
  };

  return (
    <div className="container">
      <Header title="Tasks: " />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
