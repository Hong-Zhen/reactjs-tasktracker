// https://github.com/bradtraversy/react-crash-2021

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/Add";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Data (Tasks) from server
  const fetchTasks = async () => {
    const fromServer = await fetch("http://localhost:5000/posts");
    const data = await fromServer.json();

    return data;
  };

  // Fetch Single Data (Task)
  const fetchTask = async (id) => {
    const fromServer = await fetch(`http://localhost:5000/posts/${id}`);
    const data = await fromServer.json();

    return data;
  };

  // Add Task Button Function
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    console.log(task);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Deleted", id);
  };

  // Toggle Reminder (Double click on Task)
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const taskFromServer = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await taskFromServer.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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
