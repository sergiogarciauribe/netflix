import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardMedia, Container, Stack } from "@mui/material";
import ResponsiveAppBar from "./navbar";

const Anime = () => {
  return (
    <div>
      <Stack marginTop={8}>
        <ResponsiveAppBar />
      </Stack>
      <CardMedia
        sx={{ height: 500, objectFit: "cover", backgroundPosition: "50% 30%;" }}
        image="https://img.asmedia.epimg.net/resizer/v2/G2YEEDCDGFCWTH3WMMP5ABZJDI.jpg?auth=c2bfc6dbfdb905a5c5cb557bec6f25f3df98a5bfcdbaa393ef7abaeb7789a782&width=1472&height=828&smart=true"
      />
      <Container maxWidth="xl">
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#222" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#fff" }}
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Stack
                    component="h3"
                    gap={2}
                    sx={{ color: "#ffffff", display: "inline", marginRight: 2 }}
                  >
                    Ki:
                  </Stack>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "#f7bd0e", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
            sx={{ borderColor: "rgba(239, 232, 232, 0.537)" }}
          />
        </List>
      </Container>
    </div>
  );
};

export default Anime;
