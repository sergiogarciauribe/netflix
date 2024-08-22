import * as React from "react";
import { Grid, makeStyles, Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const Movie = (props) => {
  return (
    <>
      <Grid item lg={2} md={4} sm={6} xs={8}>
        <Card
          sx={{
            maxWidth: 278,
            background: "#222",
            "&:hover": {
              transition: "linear 0.3s",
              minWidth: 300,
              border: 2,
              color: "#ed4b31",
              position: "absolute",
            },
          }}
        >
          <CardMedia
            sx={{ height: 350 }}
            image={props.image}
            title={props.title}
          />
          <CardContent sx={{ color: "white", height: 170 }}>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Stack sx={{ flexDirection: "row" }}>
                <PlayCircleIcon fontSize="large" />
                <AddCircleOutlineIcon fontSize="large" />
                <RecommendOutlinedIcon fontSize="large" />
              </Stack>
              <Stack>
                <ExpandCircleDownOutlinedIcon fontSize="large" />
              </Stack>
            </Stack>

            <Typography
              gutterBottom
              variant="subtitle2"
              component="h4"
              fontSize={"1.5rem"}
              fontWeight="bold"
            >
              {props.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="p"
              fontWeight="bold"
              textTransform={"unset"}
            >
              {props.genero}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Movie;
