import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [localTask, setLocalTask] = useState(JSON.parse(localStorage.getItem("localTask")) || []);
  // const addTask = () => {
  //   localStorage.setItem("localTask", JSON.stringify(localTask));
  // }
  // addTask();
  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));

  // }, [])

  // const showTasks = () => {
  //   let task = JSON.parse(localStorage.getItem("items"));
  //   setLocalTask(task)
  //   console.log(task);
  // };

  useEffect(() => {
    localStorage.setItem("localTask", JSON.stringify(localTask));
  }, [localTask])

  return (
    <div className="main-container">
      <Header setLocalTask={setLocalTask} localTask={localTask} />
    </div>
  );
}

export default App;
