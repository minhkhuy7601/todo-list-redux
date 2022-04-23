import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

import { useDispatch } from "react-redux";

import todoSlice from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

const options = ["High", "Medium", "Low"];

function InputToDo() {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState(options[0]);

  const handleSelectChange = (e) => {
    setPriority(e.target.value);
    // console.log(e.target.value);
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleButtonAdd = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName("");
    setPriority(options[0]);
  };

  return (
    <Grid mt={2} container spacing={2}>
      <Grid item md={7} xs={12}>
        <TextField
          value={todoName}
          onChange={handleInputChange}
          label="New todo"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item md={3} xs={7}>
        <FormControl sx={{ width: "100%" }} size="small">
          <InputLabel id="demo-select-small">Priority</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={priority}
            label="Priority"
            onChange={handleSelectChange}
          >
            {options.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} xs={5}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleButtonAdd}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputToDo;
