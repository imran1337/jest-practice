import "./App.css";
import Todo from "./Components/Todo/Todo";

function App() {
  const todos = [
    {
      id: 1,
      title: "Wash dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Make dinner",
      completed: true,
    },
  ];
  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
