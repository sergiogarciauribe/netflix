import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import { Grid, Stack } from "@mui/material";
import Movie from "./components/perfil";
import { Margin } from "@mui/icons-material";
import ResponsiveAppBar from "./components/navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack>
        <ResponsiveAppBar></ResponsiveAppBar>
      </Stack>
      <Grid container justifyContent={"center"} gap={1} marginTop={2}>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </Grid>
    </>
  );
}

export default App;
