import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import ResponsiveAppBar from "./navbar";
import { Block } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const dragonBall = [
  {
    id: 1,
    name: "Goku",
    image:
      "https://media.vandalsports.com/i/1706x960/5-2024/202459164425_1.jpg.webp",
    ki: "150,000,000",
    escuela: "Kame Sen'nin (Maestro Roshi)",
  },
  {
    id: 2,
    name: "Vegeta",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2018/10/167448.alfabetajuega-dragon-ball-super-vegeta-231016-4.jpg?width=1200",
    ki: "150,000,000",
    escuela: "Reino Saiyajin",
  },
  {
    id: 3,
    name: "Gohan",
    image:
      "https://img.asmedia.epimg.net/resizer/v2/PAPBZWRX6RA7JIXGHVJ57VN5JI.jpg?auth=e1666dc5ce8fd24d745223ed7bbfd671ddc81a450ff8278c0cef2f8306890ad6&width=736&height=414&smart=true",
    ki: "150,000,000",
    escuela: "Kame Sen'nin (Maestro Roshi) y Piccolo",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Anime = () => {
  const [ListPersonajes, setPersonajes] = React.useState(dragonBall);
  const [AnimeFrom, setAnimeFrom] = React.useState({
    id: "",
    name: "",
    img: "",
    ki: "",
    escuela: "",
  });
  //Funcion para obtener datos
  const handleChange = (event) => {
    const valueInput = event.target.value;
    const nameInput = event.target.name;

    setAnimeFrom({ ...AnimeFrom, [nameInput]: valueInput });
  };

  //crear un nuevo elemento
  const createAnime = () => {
    const newAnime = {
      id: Date.now(),
      name: AnimeFrom.name,
      img: AnimeFrom.img,
      ki: AnimeFrom.ki,
      escuela: AnimeFrom.escuela,
    };
    setPersonajes([...ListPersonajes, newAnime]);
  };
  return (
    <Stack>
      <Stack marginTop={8}>
        <ResponsiveAppBar />
      </Stack>
      <CardMedia
        sx={{ height: 500, objectFit: "cover", backgroundPosition: "50% 30%;" }}
        image="https://img.asmedia.epimg.net/resizer/v2/G2YEEDCDGFCWTH3WMMP5ABZJDI.jpg?auth=c2bfc6dbfdb905a5c5cb557bec6f25f3df98a5bfcdbaa393ef7abaeb7789a782&width=1472&height=828&smart=true"
      />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {ListPersonajes.map((personaje) => (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 550,
                  bgcolor: "#222",
                  display: "flex",
                  mb: "2rem",
                  mt: "1rem",
                }}
              >
                <ListItem
                  alignItems="center"
                  key={personaje.id}
                  sx={{ gap: "1rem" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 150, height: 150 }}
                      alt="Remy Sharp"
                      src={personaje.image}
                    />
                  </ListItemAvatar>
                  <Stack>
                    <ListItemText
                      sx={{ color: "#fff", fontWeight: "bold" }}
                      primary={personaje.name}
                      secondary={
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            component="h3"
                            gap={2}
                            sx={{
                              color: "#ffffff",
                              display: "inline",
                              marginRight: 2,
                            }}
                          >
                            Ki:
                          </Stack>
                          <ListItemText
                            component="h3"
                            variant="body2"
                            sx={{
                              color: "#f7bd0e",
                            }}
                            primary={personaje.ki}
                          ></ListItemText>
                        </Stack>
                      }
                    />
                    <ListItemText
                      sx={{ color: "#fff", fontWeight: "bold" }}
                      primary={
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            component="h3"
                            gap={2}
                            sx={{
                              color: "#ffffff",
                              display: "inline",
                              marginRight: 2,
                            }}
                          >
                            Escuela:
                          </Stack>
                          <ListItemText
                            component="h3"
                            variant="body2"
                            sx={{
                              color: "#f7bd0e",
                            }}
                            primary={personaje.escuela}
                          ></ListItemText>
                        </Stack>
                      }
                    />
                  </Stack>
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ borderColor: "rgba(239, 232, 232, 0.537)" }}
                />
              </List>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              color={"#fff"}
              variant="h6"
              component={"div"}
            >
              Formulario
            </Typography>
            <Stack display={"flex"} gap={2}>
              <TextField
                label="Nombre"
                color="warning"
                focused
                onChange={handleChange}
                name="name"
                value={AnimeFrom.name}
                id="outlined-size-small"
                size="small"
                placeholder="Nombre"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
              <TextField
                label="Ki"
                color="warning"
                focused
                onChange={handleChange}
                name="ki"
                value={AnimeFrom.ki}
                id="outlined-size-small"
                size="small"
                placeholder="Ki"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
              <TextField
                label="Escuela"
                color="warning"
                focused
                onChange={handleChange}
                name="escuela"
                value={AnimeFrom.escuela}
                id="outlined-size-small"
                size="small"
                placeholder="Escuela"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
              <Button
                component="label"
                role={undefined}
                variant="contaiinned"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  backgroundColor: "#444b97",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#5862d0" },
                }}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
              <Button
                variant="outlined"
                onClick={createAnime}
                //onClick={handleSubmit}
                sx={{ backgroundColor: "#4f5dfa", color: "#fff" }}
              >
                Enviar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Anime;
