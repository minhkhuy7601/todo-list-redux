import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import { useDispatch } from "react-redux";
import filtersSlice from "../redux/filtersSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {
    name: "High",
    type: "error",
  },
  {
    name: "Medium",
    type: "primary",
  },
  {
    name: "Low",
    type: "success",
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Filter() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [priorities, setPriorities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    dispatch(filtersSlice.actions.statusFilter(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilter(e.target.value));
  };

  const handlePriorityChange = (e) => {
    setPriorities(e.target.value);
    dispatch(filtersSlice.actions.priorityFilter(e.target.value));
  };

  return (
    <Box
      sx={{
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        borderRadius: "10px",
      }}
    >
      {/* Filter by name */}
      <Typography variant="overline" component="h2">
        Search
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        size="small"
        placeholder="Input text search"
        value={searchText}
        onChange={handleSearchChange}
      />
      {/* Filter by status */}
      <Typography variant="overline" component="h2">
        Filter by status
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row
        value={statusFilter}
        onChange={handleStatusChange}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel
          value="Completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
      </RadioGroup>
      {/* Filter by priority */}
      <Typography variant="overline" component="h2">
        Filter by status
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <Select
          id="demo-multiple-chip"
          multiple
          value={priorities}
          onChange={handlePriorityChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                let { type } = names.find((item) => item.name === value);
                return (
                  <Chip
                    key={value}
                    label={value}
                    variant="outlined"
                    color={type}
                  />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((item) => (
            <MenuItem
              key={item.name}
              value={item.name}
              style={getStyles(item.name, priorities, theme)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filter;
