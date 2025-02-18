import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Game } from "../hooks/useGames";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { customColors } from "../styles/theme";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { formatDate, formatRankAndDate } from "../app/utils";
// import { GamePromoCard } from "./ListCard";
import { ListCard } from "./ListCard";
import { Emoji } from "./Emoji";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

interface Props {
  game: Game;
  variant?: "grid" | "list";
}
export const GridCard = ({ game, variant = "grid" }: Props) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  if (variant === "list") {
    return <ListCard game={game} />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
        minHeight: "auto",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          zIndex: 10,
        },
      }}
    >
      <Card
        onMouseEnter={() => setHovered(game.id)}
        onMouseLeave={() => setHovered(null)}
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
          transform: hovered === game.id ? "scale(1.05)" : "scale(1)",
          transformOrigin: "top center",
        }}
      >
        {/* Rounded corners for the image */}
        <CardMedia
          component="img"
          image={game.background_image}
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
            flexShrink: 0,
            borderTopLeftRadius: 8, // Match card's border radius
            borderTopRightRadius: 8, // Match card's border radius
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
            width="100%"
            sx={{
              display: "flex",
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

          <Typography
            onClick={() => navigate(`/game-details/${game.id}`)}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginRight: "5px",
              "&:hover": {
                textDecoration: "underline",
                transform: "scale(1.02)",
                cursor: "pointer",
              },
            }}
          >
            {game.name}{" "}
            <Box
              component="span"
              sx={{
                verticalAlign: "middle",
                display: "inline-block",
              }}
            >
              <Emoji rating={game.rating_top} />
            </Box>
          </Typography>

          {/* Expandable Content with Rounded Bottom Corners */}
          <Box
            sx={{
              position: "absolute",
              top: "calc(100% - 15px)",
              left: 0,
              right: 0,
              bgcolor: customColors.cardBg,
              zIndex: 1,
              transition: "all 0.3s ease",
              opacity: hovered === game.id ? 1 : 0,
              transform:
                hovered === game.id ? "translateY(0)" : "translateY(-5px)",
              paddingLeft: 2,
              paddingRight: 2,
              borderBottomLeftRadius: 8, // Rounded bottom-left corner
              borderBottomRightRadius: 8, // Rounded bottom-right corner
              boxShadow: "none",
              "&:before": {
                content: '""',
                position: "absolute",
                top: "-1px",
                left: 0,
                right: 0,
                height: "1px",
                backgroundColor: customColors.cardBg,
              },
            }}
          >
            <Box
              sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}
            >
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

            <Divider
              sx={{
                borderBottomWidth: "0.5px",
                borderColor: "#6f6f6f",
                margin: "10px 3px",
              }}
            />

            <Box
              sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}
            >
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

            <Divider
              sx={{
                borderBottomWidth: "0.5px",
                borderColor: customColors.secondaryText,
                margin: "10px 3px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                marginBottom: 2,
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
              >
                {formatRankAndDate(game.released, game.rating_top)}
              </Typography>
            </Box>

            <Divider
              sx={{
                borderBottomWidth: "0.5px",
                borderColor: customColors.secondaryText,
                margin: "10px 3px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <Typography
                variant="body2"
                color={customColors.secondaryText}
                fontSize="12px"
              >
                Critic Score:
              </Typography>
              <CriticScore score={game.metacritic} />
            </Box>
            <Button
              variant="contained"
              // onClick={() => navigate(`/game-details/${game.id}`)}
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
                width: "100%", // Adjust width if needed
                display: "flex",
                boxShadow: "none",
              }}
              endIcon={<ArrowForwardIosIcon sx={{ color: "gray" }} />}
            >
              Show more like this
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
