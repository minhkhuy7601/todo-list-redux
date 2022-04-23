import SignIn from "./SignIn";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import InputToDo from "./components/InputToDo";
import { useDispatch } from "react-redux";

import todoSlice from "./redux/todoSlice";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            mt: "20px",
            padding: "10px 20px",
            minHeight: "calc(100vh - 40px)",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            mt={2}
            sx={{
              fontWeight: "800",
              letterSpacing: "5px",
            }}
          >
            TODO APP
          </Typography>
          <InputToDo />
          <TodoList />
          {/* SECTION FILTER */}
          <Filter />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
