import { Button, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Titlemovie = () => {
  return (
    <>
      <Stack
        position={"absolute"}
        marginTop={"10rem"}
        marginX={"5rem"}
        maxWidth={"400px"}
      >
        <Stack
          display={"felx"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <img
            width="50px"
            height="50px"
            src="src\assets\netflix-icon.svg"
            alt="netflix-icon"
          />
          <Typography
            variant="h2"
            color={"#bfb9b9"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"2.5rem"}
            paddingLeft={"1rem"}
            alignItems={"center"}
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
          >
            deadpool & wolverine
          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <img
            width="35px"
            height="35px"
            src="https://www.netflix.com/tudum/top10/images/top10.png"
            alt="top-10"
          />
          <Typography color={"#fff"} paddingLeft={"1rem"} fontSize={"1.8rem"}>
            N.°2 en películas hoy
          </Typography>
        </Stack>
        <Typography
          variant="p"
          paddingY={"1rem"}
          color={"#fff"}
          fontFamily={"sans-serif"}
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
        >
          <Button
            startIcon={<PlayArrowIcon sx={{ fontSize: 46, color: "#000" }} />}
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "initial",
              backgroundColor: "#fff",
              color: "#000",
              paddingX: "2rem",
              "&:hover": {
                backgroundColor: "#e8d9d9db",
              },
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
              fontSize: "1rem",
              textTransform: "initial",
              backgroundColor: "#a39696",
              color: "#fff",
              paddingX: "2rem",
              "&:hover": {
                backgroundColor: "#3b393932",
              },
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
