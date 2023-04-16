import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Form } from "./Form";
import { List } from "./List";

function App() {
  function addTask(taskName) {
    console.log(taskName);
    const newTask = { task: taskName, completed: false, id: uuidv4() };

    console.log(newTask);
    // add it to state
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  const [task, setTasks] = useState([{ task: "milk the cat", completed: false, id: 1 }]);

  function completeTask(id) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Form addTask={addTask}></Form>
      <List tasks={task} completeTask={completeTask}></List>
    </div>
  );
}

export default App;
