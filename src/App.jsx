import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </>
  );
}

export default App;
