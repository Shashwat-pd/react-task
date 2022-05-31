import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

const x = [
  {
    id: 1,
    text: "Appointment",
    day: "Tuesday",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting",
    day: "Wednesday",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Friday",
    reminder: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(x);
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }

  const toggleForm = () => {
    setShowAddTask(!showAddTask)
    console.log(showAddTask)
  }


  return (
    <div className="container">
      <Header toggle={toggleForm} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "Nothing to show"
      )}
    </div>
  );
}

export default App;
