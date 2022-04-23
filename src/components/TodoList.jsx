import React from "react";
import Todo from "./Todo";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { todosRemaingSelector } from "../redux/selectors";

function TodoList() {
  const todoList = useSelector(todosRemaingSelector);

  return (
    <Box
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
        mt: 2,
        padding: 2,
        height: "17rem",
        overflow: "auto",
      }}
    >
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          priority={todo.priority}
          completed={todo.completed}
        />
      ))}
    </Box>
  );
}

export default TodoList;
