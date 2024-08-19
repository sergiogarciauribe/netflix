import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import { Stack } from "@mui/material";
import Movie from "./components/perfil";
import NavBar from "./components/navbar";
import { Margin } from "@mui/icons-material";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack>
        <NavBar></NavBar>
      </Stack>
      <div>
        <Stack>
          <Movie></Movie>
        </Stack>
      </div>
    </>
  );
}

export default App;
