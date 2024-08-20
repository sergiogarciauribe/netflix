import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import { movies } from "./constant/movies";
import { Grid, Stack } from "@mui/material";
import Movie from "./components/movie";
import { Margin } from "@mui/icons-material";
import ResponsiveAppBar from "./components/navbar";
function App() {
  const [count, setCount] = useState(0);

  const [ListMovies, setLisMovies] = useState(movies);

  return (
    <>
      <Stack>
        <ResponsiveAppBar />
      </Stack>
      <Grid container justifyContent={"center"} gap={1} marginTop={2}>
        {ListMovies.map((movie) => (
          <Movie key={movie.id} image={movie.image} title={movie.title} />
        ))}
      </Grid>
    </>
  );
}

export default App;
