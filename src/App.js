import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [items, setItems] = useState([]);
  const [localTask, setLocalTask] = useState([])
  // const addTask = (tasks) => {
  //   setItems(tasks)
  // };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));

  }, [items])

  const showTasks = () => {
    let task = JSON.parse(localStorage.getItem("tasks"));
    setLocalTask(task)
  }
  useEffect(() => {
    showTasks();
  }, [])
  console.log(localTask);
  return (
    <div className="main-container">
      <Header setItems={setItems} localTask={localTask} />
    </div>
  );
}

export default App;
