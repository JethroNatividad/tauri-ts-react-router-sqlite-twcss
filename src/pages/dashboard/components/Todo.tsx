import React from "react";
import { Todo as TodoType } from "../../../api/todos";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  return (
    <div className={todo.status === "DONE" ? "line-through text-gray-500" : ""}>
      {todo.title}
    </div>
  );
};

export default Todo;
