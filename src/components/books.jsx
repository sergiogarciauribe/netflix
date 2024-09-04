import * as React from "react";
import {
  Avatar,
  colors,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "#222",
}));

const books = [
  {
    id: 1,
    title: "Harry Potter",
    autorBook: "J.K RowLing",
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    autorBook: "J.R.R Tokien",
  },
  {
    id: 3,
    title: "El señor de los anillos",
    autorBook: "J.R.R Tokien",
  },
];

const Books = () => {
  const [ListBooks, setBooks] = React.useState(books);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              color={"#fff"}
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
            >
              Mi libreria 📚📚
            </Typography>
            <Demo>
              <List>
                {ListBooks.map((book) => (
                  <ListItem
                    key={book.id}
                    sx={{ color: "#fff" }}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <MenuBookIcon sx={{ color: "#222" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={book.title}
                      secondary={book.autorBook}
                      secondaryTypographyProps={{ color: "#ff2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
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
                label="Titulo"
                color="warning"
                focused
                id="outlined-size-small"
                size="small"
                placeholder="Titulo"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
              <TextField
                label="Autor"
                color="warning"
                focused
                id="outlined-size-small"
                size="small"
                placeholder="Autor"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Books;
