import * as React from "react";
import {
  Avatar,
  Button,
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
import { MdDeleteSweep } from "react-icons/md";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { MdEdit } from "react-icons/md";

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
  const [ListBooks, setListBooks] = React.useState(books);
  const [bookFrom, setBookFrom] = React.useState({
    id: "",
    title: "",
    autorBook: "",
  });

  //Funcion para capturar los datos
  const handleChange = (event) => {
    const valueInput = event.target.value;
    const nameInput = event.target.name;
    //Agregar datos al bookForm
    setBookFrom({ ...bookFrom, [nameInput]: valueInput });
  };

  const editBook = () => {
    //Vamos a editar el elemento
    //alert("Voy a editar");
    const newList = ListBooks.map((book) => {
      if (book.id === bookFrom.id) {
        return bookFrom;
      } else {
        return book;
      }
    });

    setListBooks(newList);
    // Limpiar los datos

    setBookFrom({ id: "", title: "", autorBook: "" });
  };

  const createBook = () => {
    const newBook = {
      id: Date.now(),
      title: bookFrom.title,
      autorBook: bookFrom.autorBook,
    };
    setListBooks([...ListBooks, newBook]);

    //Limpiar los datos
    setBookFrom({ id: "", title: "", autorBook: "" });
  };

  //Funcion para enviar los datos a la lista
  const handleSubmit = () => {
    if (!bookFrom.title || !bookFrom.autorBook) {
      alert("Ingresa todos los datos");
      return;
    }

    if (bookFrom.id) {
      editBook();
      return;
    }
    createBook();
  };

  const handleDelete = (bookId) => {
    const newList = ListBooks.filter((book) => book.id !== bookId);
    setListBooks(newList);
  };

  const handleEdit = (bookId) => {
    const findbook = ListBooks.find((book) => book.id === bookId);
    setBookFrom(findbook);
  };

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
                      <Stack
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"row"}
                        gap={1}
                      >
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => handleEdit(book.id)}
                        >
                          <MdEdit color="#fff" />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(book.id)}
                        >
                          <MdDeleteSweep color="#fff" />
                        </IconButton>
                      </Stack>
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
                onChange={handleChange}
                name="title"
                value={bookFrom.title}
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
                onChange={handleChange}
                name="autorBook"
                value={bookFrom.autorBook}
                id="outlined-size-small"
                size="small"
                placeholder="Autor"
                InputProps={{
                  style: { color: "#FFF" },
                }}
              />
              <Button
                variant="outlined"
                onClick={handleSubmit}
                sx={{ backgroundColor: "#4f5dfa", color: "#fff" }}
              >
                Enviar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Books;
