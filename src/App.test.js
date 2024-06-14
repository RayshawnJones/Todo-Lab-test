import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./App";

test("renders todo input and submit button", () => {
  render(<TodoApp />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/submit/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("allows users to add items to their todo list", () => {
  render(<TodoApp />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/submit/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText(/new todo/i);
  expect(todoItem).toBeInTheDocument();
});

test("allows users to toggle todo completion", () => {
  render(<TodoApp />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/submit/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText(/new todo/i);
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass("completed");
});

test("allows users to delete a todo", () => {
  render(<TodoApp />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByText(/submit/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(buttonElement);

  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  const todoItem = screen.queryByText(/new todo/i);
  expect(todoItem).not.toBeInTheDocument();
});

test("Theme toggle changes the theme", () => {
  render(<TodoApp />);
  const themeToggleButton = screen.getByText(/toggle theme/i);

  fireEvent.click(themeToggleButton);
  expect(screen.getByRole("main")).toHaveClass("dark-mode");

  fireEvent.click(themeToggleButton);
  expect(screen.getByRole("main")).toHaveClass("light-mode");
});
