import { Box, Checkbox, Chip, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todoSlice from "../redux/todoSlice";

const colors = [
  { priority: "High", color: "error" },
  { priority: "Medium", color: "primary" },
  { priority: "Low", color: "success" },
];

function Todo({ name, priority, completed, id }) {
  const dispatch = useDispatch();
  const { color } = colors.find((item) => item.priority === priority);

  const [checked, setChecked] = useState(completed);

  const handleCheckBoxChange = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.toggleTodo(id));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <FormControlLabel
        sx={checked ? { textDecoration: "line-through" } : {}}
        control={checked ? <Checkbox defaultChecked /> : <Checkbox />}
        label={name}
        onChange={handleCheckBoxChange}
      />
      <Chip label={priority} variant="outlined" color={color} />
    </Box>
  );
}

export default Todo;
