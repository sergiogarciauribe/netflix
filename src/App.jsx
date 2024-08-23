import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import { movies } from "./constant/movies";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Movie from "./components/movie";
import { Margin } from "@mui/icons-material";
import ResponsiveAppBar from "./components/navbar";
import { series } from "./constant/series";
function App() {
  const [count, setCount] = useState(0);

  const [ListMovies, setLisMovies] = useState(movies);
  const [ListSeries, setLisSeries] = useState(series);

  return (
    <>
      <Stack>
        <ResponsiveAppBar />
        <video width="100%" height="auto" controls autoPlay muted loop>
          <source src="src\assets\Deadpool & Wolverine.mp4" type="video/mp4" />
        </video>
      </Stack>
      <Container maxWidth="lg" sx={{ justifyContent: "center" }}>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="h2"
          fontWeight="bold"
          fontSize={"1.8rem"}
          color={"#fff"}
          marginBottom={0}
          marginTop={4}
        >
          Películas
        </Typography>
        <Stack
          sx={{
            overflowX: "auto",
            flexDirection: "row",
            paddingY: 1,
            marginBottom: 5,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#E50914",
              borderRadius: "0",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bb0a13",
            },
          }}
        >
          {ListMovies.map((movie) => (
            <Movie
              key={movie.id}
              image={movie.image}
              title={movie.title}
              genero={movie.genero}
            />
          ))}
        </Stack>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="h2"
          fontWeight="bold"
          fontSize={"1.8rem"}
          color={"#fff"}
          marginBottom={0}
        >
          Series
        </Typography>
        <Stack
          sx={{
            overflowX: "auto",
            flexDirection: "row",
            paddingY: 3,
            marginBottom: 3,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#E50914",
              borderRadius: "0",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bb0a13",
            },
          }}
        >
          {ListSeries.map((movie) => (
            <Movie
              key={movie.id}
              image={movie.image}
              title={movie.title}
              genero={movie.genero}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default App;
