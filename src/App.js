import './App.css';
import Header from './components/Header';


function App() {
  const addTask = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  return (
    <div className="main-container">
      <Header addTask={addTask} />
    </div>
  );
}

export default App;
