import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Titlemovie = () => {
  const isSmallScrren = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack
        position={"absolute"}
        maxWidth={"500px"}
        sx={{
          marginTop: { xs: "5rem", md: "10rem", lg: "15rem" },
          marginX: { xs: "2rem", md: "5rem" },
        }}
      >
        <Stack
          display={"felx"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
          alignItems={"center"}
          sx={{ img: { xs: { width: "30px" }, sm: { width: "50px" } } }}
        >
          <img src="src\assets\netflix-icon.svg" alt="netflix-icon" />
          <Typography
            variant="h2"
            color={"#bfb9b9"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            paddingLeft={"1rem"}
            alignItems={"center"}
            sx={{ fontSize: { xs: "1rem", md: "2.5rem" } }}
          >
            película
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="h4"
            color={"#fff"}
            textTransform={"uppercase"}
            paddingY={"1rem"}
            sx={{ fontSize: { xs: "1rem", md: "1.5rem", lg: "2.2rem" } }}
          >
            deadpool & wolverine
          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{ img: { xs: { width: "20px" }, sm: { width: "35px" } } }}
        >
          <img
            src="https://www.netflix.com/tudum/top10/images/top10.png"
            alt="top-10"
          />
          <Typography
            color={"#fff"}
            paddingLeft={"1rem"}
            sx={{ fontSize: { xs: "0.8rem", md: "1.8rem" } }}
          >
            N.°2 en películas hoy
          </Typography>
        </Stack>
        <Typography
          variant="p"
          paddingY={"1rem"}
          color={"#fff"}
          fontFamily={"sans-serif"}
          sx={{ display: { xs: "none", md: "inline" } }}
        >
          Wade Wilson, un mercenario con un humor sarcástico y habilidades
          regenerativas, se une a Logan, un mutante con garras de adamantium y
          un instinto salvaje. Juntos, combinan violencia, comedia y una feroz
          determinación para enfrentar a cualquier enemigo que se cruce en su
          camino.
        </Typography>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          sx={{ paddingY: { xs: "0.5rem" } }}
        >
          <Button
            startIcon={<PlayArrowIcon sx={{ fontSize: 46, color: "#000" }} />}
            sx={{
              fontWeight: "bold",
              textTransform: "initial",
              backgroundColor: "#fff",
              color: "#000",
              paddingX: { xs: "0.5rem", md: "2rem" },
              marginRight: { xs: "0.5rem" },
              "&:hover": {
                backgroundColor: "#e8d9d9db",
              },
              fontSize: { xs: "0.7rem", md: "1rem" },
            }}
          >
            Reproducir
          </Button>
          <Button
            startIcon={
              <InfoOutlinedIcon sx={{ fontSize: 46, color: "#fff" }} />
            }
            sx={{
              fontWeight: "bold",
              textTransform: "initial",
              backgroundColor: "#a39696",
              color: "#fff",
              paddingX: { xs: "0.5rem", md: "1.5rem" },
              marginRight: { xs: "0.5rem" },
              "&:hover": {
                backgroundColor: "#3b393932",
              },
              fontSize: { xs: "0.7rem", md: "1rem" },
            }}
          >
            Más información
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Titlemovie;
