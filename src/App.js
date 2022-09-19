import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import NoTodos from "./components/NoTodos";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //  if (Object.keys(todos).length === 0) {
  //    <NoTodos/>
  // }
  // if (Object.keys(todos).length > 0 ) {
  // console.log("shit not empty");

  // }
  // },[todos]);

  // props are passed below as xyz = {xyz}
  return (
    <div className="app-wrapper">
      <Header />
      <NewTask
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      {todos.length ? <TaskList setTodos={setTodos} todos={todos} />: <NoTodos/>}

    </div>
  );
}

export default App;
