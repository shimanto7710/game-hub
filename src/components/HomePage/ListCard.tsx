// ListCard.tsx
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Game } from "../../hooks/useGames";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { formatDate, formatRankAndDate } from "../../app/utils";
import PlatformIconList from "./PlatformIconList";

import { customColors } from "../../styles/theme";

interface Props {
  game: Game;
}
// ListCard.tsx
export const ListCard = ({ game }: Props) => {
  return (
    <Box
      sx={{
        width: "100%", // Take full parent width
        display: "flex",
        justifyContent: "center", // Center horizontally
        padding: 2, // Add some spacing
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }, // Responsive width
          maxWidth: 800, // Maximum card width
        }}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#202020",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            image={game.background_image}
            sx={{
              width: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />

          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              p: 2,
              gap: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <PlatformIconList
                platforms={
                  game.parent_platforms && game.parent_platforms.length > 0
                    ? game.parent_platforms.map((p) => p.platform)
                    : []
                }
              />
              {/* <CriticScore score={game.metacritic} /> */}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "20px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: 1.2,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {game.name}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginBottom: 2,
                  backgroundColor: customColors.buttonBg,
                  color: "#fff",
                  justifyContent: "space-between",
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#252525" },
                  width: "30%", // Adjust width if needed
                  display: "flex",
                  height: "70%",
                  boxShadow: "none",
                }}
                endIcon={<ArrowForwardIosIcon sx={{ color: "gray" }} />}
              >
                Show more like this
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
              <Box sx={{ display: "flex", gap: 1, marginRight: "15px" }}>
                <Typography
                  variant="body2"
                  color={customColors.secondaryText}
                  fontSize="12px"
                >
                  Release Date:
                </Typography>
                <Typography
                  variant="body2"
                  color={customColors.text}
                  fontSize="12px"
                >
                  {formatDate(game.released)}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, marginRight: "15px" }}>
                <Typography
                  variant="body2"
                  color={customColors.secondaryText}
                  fontSize="12px"
                >
                  Playtime:
                </Typography>
                <Typography
                  variant="body2"
                  color={customColors.text}
                  fontSize="12px"
                >
                  {game.playtime}h
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  marginBottom: 2,
                  marginRight: "15px",
                }}
              >
                <Typography
                  variant="body2"
                  color={customColors.secondaryText}
                  fontSize="12px"
                >
                  Chart:
                </Typography>
                <Typography
                  variant="body2"
                  color={customColors.text}
                  fontSize="12px"
                  sx={{ textDecoration: "underline" }}
                >
                  {formatRankAndDate(game.released, game.rating_top)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  marginBottom: 2,
                  marginRight: "15px",
                }}
              >
                <Typography
                  variant="body2"
                  color={customColors.secondaryText}
                  fontSize="12px"
                >
                  Rating:
                </Typography>
                <Typography
                  variant="body2"
                  color={customColors.text}
                  fontSize="12px"
                >
                  {game.rating_top}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
