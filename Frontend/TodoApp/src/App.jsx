import { useEffect, useState } from "react"
import { CreateTodo } from "./Component/CreateTodo"
import { Todos } from "./Component/Todos"
import axios from "axios"
function App(){

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/todos").then((response)=>{
      setTodos(response.data);
    });
  },[]);

  return <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
}

export default App
