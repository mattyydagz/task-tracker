// import React from "react"; for class example
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Aug 19th at 11:00am",
      reminder: true,
    },
    {
      id: 2,
      text: "Make lunch",
      day: "Aug 19th at 12:00am",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "You currently have no tasks."
      )}
    </div>
  );
}

/** Example of a class
 * class App extends React.Component {
  render() {
    return <h1>Hello I am a Class</h1>;
  }
  }
*/

export default App;
