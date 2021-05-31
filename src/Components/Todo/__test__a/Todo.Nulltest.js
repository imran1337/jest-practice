// import { render, screen, cleanup } from "@testing-library/react";
// import Todo from "../Todo";

// afterEach(() => cleanup());

// describe("Testing todo component", () => {
//   test("should render non-completed todo", () => {
//     const todo = {
//       id: 1,
//       title: "Wash dishes",
//       completed: false,
//     };
//     render(<Todo todo={todo} />);
//     const todoElement = screen.getByTestId("todo-1");
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent(todo.title);
//     expect(todoElement).not.toContainHTML("<strike>");
//   });

//   test("should render completed todo", () => {
//     const todo = {
//       id: 2,
//       title: "Make dinner",
//       completed: true,
//     };
//     render(<Todo todo={todo} />);
//     const todoElement = screen.getByTestId("todo-2");
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent(todo.title);
//     expect(todoElement).toContainHTML("<strike>");
//   });
// });
