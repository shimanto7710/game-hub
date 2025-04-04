import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardMedia,
  capitalize,
  Divider,
  Button,
  colors,
} from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { formatToFutureDate } from "../app/utils";
import PlatformIconList from "../components/HomePage/PlatformIconList";
import { customColors } from "../styles/theme";
import AddIcon from "@mui/icons-material/Add";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import DescriptionToggle from "../components/GameDetailsPage/DescriptionToggle";
import useGameSS from "../hooks/useGameScreenShot";
import { GameCard } from "../components/HomePage/GameCard";
import useRelatedGames from "../hooks/useRelatedGames";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
// import useTwitch from "../hooks/useTwitch";
// import useGameScreenShot from "../hooks/useGameScreenShot";

const GameDetailsPage = () => {
  const { id } = useParams(); // Get game ID from URL
  const { data: gameDetails, error, isLoading } = useGameDetails(Number(id));
  const { data: gameScreenShot } = useGameSS(Number(id));
  const { data: relatedGames } = useRelatedGames(Number(id));
  // const { data: twitchData } = useTwitch(Number(id));

  if (isLoading)
    return (
      <CircularProgress sx={{ display: "block", margin: "auto", mt: 5 }} />
    );
  if (error)
    return <Typography color="error">Error loading game details</Typography>;

  return (
    <Box display="flex" width="90%">
      <Container sx={{ marginLeft: "7%" }}>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            color: "white",
            padding: "0px 0px",
            width: "fit-content",
          }}
        >
          {/* Release Date */}
          {gameDetails?.released && (
            <Chip
              label={formatToFutureDate(gameDetails?.released)}
              sx={{
                bgcolor: "white",
                fontWeight: "bold",
                borderRadius: "4px",
                color: "black",
                height: "25px",
              }}
            />
          )}
          <Box sx={{ marginTop: "10px" }}>
            <PlatformIconList
              platforms={
                gameDetails?.parent_platforms &&
                gameDetails.parent_platforms.length > 0
                  ? gameDetails.parent_platforms.map((p) => p.platform)
                  : []
              }
            />
          </Box>

          {/* Playtime */}
          <Typography variant="body2">
            AVERAGE PLAYTIME{gameDetails?.playtime}
          </Typography>
        </Box>
        {/* Game Title */}
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          sx={{ marginTop: "20px" }}
        >
          {gameDetails?.name}
        </Typography>

        <Box display="flex" sx={{ marginTop: "20px" }}>
          <Box>
            <Typography variant="h5" color="white">
              {capitalize(gameDetails?.ratings[0]?.title || "")}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                marginTop: "5px",
                textDecoration: "underline",
                color: "gray",
              }}
            >
              {gameDetails?.rating_top} RATINGS
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              marginLeft: "20px",
              marginRight: "20px",
              borderColor: "gray", // color of the divider line
              opacity: 1, // adjust the visibility if needed
            }}
          />

          <Box>
            <Typography variant="h5" color="white">
              #{gameDetails?.ratings_count}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                marginTop: "5px",
                textDecoration: "underline",
                color: "gray",
                fontSize: "16px",
              }}
            >
              {gameDetails?.genres?.map((genre) => genre.name).join(", ")}
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              marginLeft: "20px",
              marginRight: "20px",
              borderColor: "gray", // color of the divider line
              opacity: 1, // adjust the visibility if needed
            }}
          />

          <Box>
            <Typography variant="h5" color="white">
              {gameDetails?.rating}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                marginTop: "5px",
                textDecoration: "underline",
                color: "gray",
              }}
            >
              {capitalize(gameDetails?.ratings[1]?.title || "")}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" width="100%">
          <Button
            variant="contained"
            // onClick={() => navigate(`/game-details/${game.id}`)}
            sx={{
              marginBottom: 2,
              marginTop: "30px",
              backgroundColor: customColors.buttonBg,
              color: colors.grey[400],
              fontSize: "15px",
              borderRadius: "4px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#252525" },
              flex: "1",
              display: "flex",
              height: "40px",
              boxShadow: "none",
            }}
            startIcon={<AddIcon sx={{ color: "gray" }} />}
          >
            Write a review
          </Button>

          <Button
            variant="contained"
            // onClick={() => navigate(`/game-details/${game.id}`)}
            sx={{
              marginBottom: 2,
              marginTop: "30px",
              marginLeft: "20px",
              backgroundColor: customColors.buttonBg,
              color: colors.grey[400],
              fontSize: "15px",
              borderRadius: "4px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#252525" },
              flex: "1",
              display: "flex",
              height: "40px",
              boxShadow: "none",
            }}
            startIcon={<MapsUgcRoundedIcon sx={{ color: "gray" }} />}
          >
            Write a comment
          </Button>
        </Box>

        <Typography
          sx={{
            marginTop: "30px",
            marginBottom: "5px",
          }}
          variant="h5"
          color="white"
        >
          About
        </Typography>

        {gameDetails && (
          <DescriptionToggle description={gameDetails.description_raw} />
        )}

        {/* 1st row */}
        <Box
          display="flex"
          sx={{
            marginTop: "30px",
            marginBottom: "5px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="white"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
              }}
            >
              Platform
            </Typography>
            <Typography
              variant="body2"
              color="white"
              width="50%"
              sx={{
                textDecoration: "underline",
                fontSize: "16px",
              }}
            >
              {gameDetails?.platforms?.map(
                (platform) => platform.platform.name + ",  "
              )}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              color="white"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
              }}
            >
              Genre
            </Typography>
            <Typography
              variant="body2"
              color="white"
              width="50%"
              sx={{
                textDecoration: "underline",
              }}
            >
              {gameDetails?.genres?.map((genre) => genre.name)}
            </Typography>
          </Box>
        </Box>

        {/* 2nd row */}
        <Box
          display="flex"
          sx={{
            marginTop: "30px",
            marginBottom: "5px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="white"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
              }}
            >
              Released Date
            </Typography>
            <Typography
              variant="body2"
              color="white"
              width="100%"
              sx={{
                textDecoration: "underline",
                fontSize: "16px",
              }}
            >
              {gameDetails?.released
                ? formatToFutureDate(gameDetails.released)
                : "N/A"}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
                textAlign: "right",
              }}
            >
              Developer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "right",
                // Optional styling
                fontSize: "16px",
                textDecoration: "underline",
                color: "white",
              }}
            >
              {gameDetails?.developers?.map((dev) => dev.name)}
            </Typography>
          </Box>
        </Box>

        {/* 3nd row */}
        <Box
          display="flex"
          sx={{
            marginTop: "30px",
            marginBottom: "5px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="white"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
              }}
            >
              Publisher
            </Typography>
            <Typography
              variant="body2"
              color="white"
              width="100%"
              sx={{
                textDecoration: "underline",
                fontSize: "16px",
              }}
            >
              {gameDetails?.publishers?.map((pub) => pub.name)}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                marginTop: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                color: "gray",
                textAlign: "right",
              }}
            >
              Age rating
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "right",
                fontSize: "16px",
                // Optional styling
                marginTop: "5px",

                color: "white",
              }}
            >
              {gameDetails?.esrb_rating?.name}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "15px",
            color: "gray",
          }}
        >
          Tag
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "3px",
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          {gameDetails?.tags?.map((tag) => tag.name).join(", ")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "15px",
            color: "gray",
          }}
        >
          Website
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "3px",
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          {gameDetails?.website}
        </Typography>

        {gameDetails?.platforms?.map((item) => {
          {
            return (
              <>
                {(item.requirements?.minimum ||
                  item.requirements?.recommended) && (
                  <Typography
                    variant="body2"
                    sx={{
                      marginTop: "25px",
                      color: "white",
                      fontSize: "24px",
                    }}
                  >
                    System requirements for {item.platform.name} <br />
                    {item.requirements?.minimum && (
                      <DescriptionToggle
                        description={item.requirements?.minimum}
                      />
                      // <Typography sx={{ fontSize: "14px" }}>
                      //   {item.requirements?.minimum}
                      // </Typography>
                    )}
                    <Box sx={{ height: "10px" }}></Box>
                    {item.requirements?.recommended && (
                      <DescriptionToggle
                        description={item.requirements?.recommended}
                      />
                      // <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
                      //   {item.requirements?.recommended}
                      // </Typography>
                    )}
                  </Typography>
                )}
              </>
            );
          }
        })}

        <Typography
          variant="body2"
          align="center"
          sx={{
            marginTop: "30px",
            color: "white",
            fontSize: "24px",
            textDecoration: "underline",
          }}
        >
          Games Like {gameDetails?.name}
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: "0px" }}>
          {relatedGames.map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={4} lg={4} xl={3}>
              <GameCard game={game} variant={"grid"} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ width: "50%", height: "100%", marginTop: "35px" }}>
        {gameScreenShot?.results && gameScreenShot.results.length > 0 && (
          <Card
            // onMouseEnter={() => setHovered(game.id)}
            // onMouseLeave={() => setHovered(null)}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#202020",
              transition: "all 0.3s ease-in-out",
              boxShadow: 3,
              overflow: "visible",
              position: "relative",
              borderRadius: 2, // Rounded corners for the card
              // transform: hovered === game.id ? "scale(1.05)" : "scale(1)",
              transformOrigin: "top center",
            }}
          >
            {/* Rounded corners for the image */}
            <CardMedia
              component="img"
              // image={gameScreenShot?.results[0].image}
              image={gameScreenShot.results[0].image}
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                flexShrink: 0,
                borderTopLeftRadius: 8, // Match card's border radius
                borderTopRightRadius: 8, // Match card's border radius
              }}
            />
          </Card>
        )}

        <Grid container spacing={1} sx={{ marginTop: "0px" }}>
          {gameScreenShot?.results.slice(1).map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={5} xl={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#202020",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: 3,
                  overflow: "visible",
                  position: "relative",
                  borderRadius: 2,
                  transformOrigin: "top center",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    flexShrink: 0,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          // onClick={() => navigate(`/game-details/${game.id}`)}
          sx={{
            marginBottom: 2,
            marginTop: "30px",
            backgroundColor: "white",
            color: "black",
            fontSize: "15px",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": { backgroundColor: "gray" },
            width: "100%", // Adjust width if needed
            display: "flex",
            height: "40px",
            boxShadow: "none",
          }}
          startIcon={<DrawOutlinedIcon sx={{ color: "black" }} />}
        >
          Edit the game info
        </Button>
        <Typography
          variant="body2"
          align="center"
          sx={{
            marginTop: "8px",
            color: "gray",
            fontSize: "12px",
          }}
        >
          Last Modified:
          {gameDetails?.updated
            ? formatToFutureDate(gameDetails.updated)
            : "N/A"}
        </Typography>

        <Typography
          variant="body2"
          align="left"
          sx={{
            marginTop: "20px",
            color: "gray",
            fontSize: "16px",
          }}
        >
          Where to buy
        </Typography>

        <Box display="flex" sx={{ width: "100%", marginTop: "15px" }}>
          <Button
            variant="contained"
            // onClick={() => navigate(`/game-details/${game.id}`)}
            sx={{
              marginBottom: 2,

              backgroundColor: customColors.buttonBg,
              color: colors.grey[400],
              fontSize: "15px",
              borderRadius: "4px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#252525" },
              flex: 1,
              marginRight: "5px",
              display: "flex",
              height: "40px",
              boxShadow: "none",
            }}
          >
            GOG
          </Button>

          <Button
            variant="contained"
            // onClick={() => navigate(`/game-details/${game.id}`)}
            sx={{
              marginBottom: 2,

              backgroundColor: customColors.buttonBg,
              color: colors.grey[400],
              fontSize: "15px",
              borderRadius: "4px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#252525" },
              flex: 1,
              display: "flex",

              marginLeft: "5px",
              height: "40px",
              boxShadow: "none",
            }}
          >
            Epic Games
          </Button>
        </Box>

        <Button
          variant="contained"
          // onClick={() => navigate(`/game-details/${game.id}`)}
          sx={{
            marginBottom: 2,
            marginTop: "5px",
            backgroundColor: customColors.buttonBg,
            color: colors.grey[400],
            fontSize: "15px",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#252525" },
            width: "49%", // Adjust width if needed
            display: "flex",
            height: "40px",
            boxShadow: "none",
          }}
        >
          Steam
        </Button>
      </Container>
    </Box>
  );
};

export default GameDetailsPage;
