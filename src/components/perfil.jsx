import * as React from "react";
import { Grid, makeStyles } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const Movie = () => {
  return (
    <>
      <Grid item lg={3} md={4} sm={5} xs={8}>
        <Card sx={{ maxWidth: 345, background: "#222" }}>
          <CardMedia
            sx={{ height: 350 }}
            image="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq"
            title="green iguana"
          />
          <CardContent sx={{ color: "white" }}>
            <SkipPreviousIcon fontSize="large" />
            <PlayCircleIcon fontSize="large" />
            <SkipNextIcon fontSize="large" />
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
              fontWeight="bold"
            >
              Pijamada en la casa compacta de Polly Pocket
            </Typography>
            <Typography gutterBottom variant="body2">
              Anfitrión: Polly PocketAnfitrión: Polly Pocket
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
              fontWeight="bold"
            >
              Abre el 21 de agosto
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Movie;
