// https://github.com/bradtraversy/react-crash-2021

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/Add";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fromServer = await fetch("http://localhost:5000/posts");
      const data = await fromServer.json();

      console.log(data);
    };

    fetchTasks();
  }, []);

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
      <Header
        title="Tasks: "
        onAdd={() => setShowAddForm(!showAddForm)}
        showAdd={showAddForm}
      />
      {showAddForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
