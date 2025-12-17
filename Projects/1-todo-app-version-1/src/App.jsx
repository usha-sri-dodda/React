import TodoItem2 from "./componenets/TodoItem2";
import TodoItem1 from "./componenets/TodoItem1";
import AddTodo from "./componenets/AddTodo";
import AppName from "./componenets/AppName";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
