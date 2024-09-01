import * as React from "react";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "#222",
}));

const books = [
  {
    id: 1,
    title: 'Harry Potter',
    autorBook: 'J.K RowLing',
  },
  {
    id: 2,
    title: 'The Lord of the Rings',
    autorBook: 'J.R.R Tokien',
  },
  {
    id: 3,
    title: 'El señor de los anillos',
    autorBook: 'J.R.R Tokien',
  },

]


const Books = () => {
  const [ListBooks, setBooks] = React.useState(books);

  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography color={"#fff"} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>
        <Demo>
          <List>
            {ListBooks.map((book) => (
            <ListItem key={book.id}  sx={{color:"#fff"}}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon sx={{color:"#fff" }}  />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <MenuBookIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={book.title}
                secondary={book.autorBook}
                secondaryTypographyProps={{ color: '#ff2' }}
              />
            </ListItem>
           ))}  
          </List>
        </Demo>
      </Grid>
    </>
  );
};

export default Books;
