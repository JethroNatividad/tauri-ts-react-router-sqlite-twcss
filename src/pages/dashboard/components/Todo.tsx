import React from "react";
import { Todo as TodoType, updateTodo } from "../../../api/todos";

type Props = {
  todo: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const Todo = ({ todo, setTodos }: Props) => {
  const toggleStatus = async () => {
    const newStatus = todo.status === "PENDING" ? "DONE" : "PENDING";
    await updateTodo({ ...todo, status: newStatus });
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, status: newStatus } : t,
      ),
    );
  };

  return (
    <div
      onClick={toggleStatus}
      className={`${todo.status === "DONE" ? "line-through text-gray-500" : ""} border-b border-gray-300 py-2`}
    >
      {todo.title}
    </div>
  );
};

export default Todo;
