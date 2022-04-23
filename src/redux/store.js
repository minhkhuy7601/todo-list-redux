import filtersSlice from "./filtersSlice";
import todoSlice from "./todoSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
