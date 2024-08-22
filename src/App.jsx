import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import { movies } from "./constant/movies";
import { Container, Grid, Stack } from "@mui/material";
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
        <Container maxWidth="xl">
          <video width="100%" height="auto" controls autoPlay muted loop>
            <source
              src="src\assets\Deadpool & Wolverine.mp4"
              type="video/mp4"
            />
          </video>
        </Container>
      </Stack>
      <Grid container justifyContent={"center"} gap={1} marginTop={2}>
        {ListMovies.map((movie) => (
          <Movie
            key={movie.id}
            image={movie.image}
            title={movie.title}
            genero={movie.genero}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;
