import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Game } from "../hooks/useGames";
import { useState } from "react";
import { colors } from "../styles/theme";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { formatDate, formatRankAndDate } from "../app/utils";

interface Props {
  game: Game;
}
export const GridCard = ({ game }: Props) => {
  const [hovered, setHovered] = useState<number | null>(null);

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

          <Typography
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
            }}
          >
            {game.name}
          </Typography>

          {/* Expandable Content with Rounded Bottom Corners */}
          <Box
            sx={{
              position: "absolute",
              top: "calc(100% - 15px)",
              left: 0,
              right: 0,
              bgcolor: colors.cardBg,
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
                backgroundColor: colors.cardBg,
              },
            }}
          >
            <Box
              sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}
            >
              <Typography
                variant="body2"
                color={colors.secondaryText}
                fontSize="12px"
              >
                Release Date:
              </Typography>
              <Typography variant="body2" color={colors.text} fontSize="12px">
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
                color={colors.secondaryText}
                fontSize="12px"
              >
                Playtime:
              </Typography>
              <Typography variant="body2" color={colors.text} fontSize="12px">
                {game.playtime}h
              </Typography>
            </Box>

            <Divider
              sx={{
                borderBottomWidth: "0.5px",
                borderColor: colors.secondaryText,
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
                color={colors.secondaryText}
                fontSize="12px"
              >
                Chart:
              </Typography>
              <Typography variant="body2" color={colors.text} fontSize="12px">
                {formatRankAndDate(game.released, game.rating_top)}
              </Typography>
            </Box>

            <Divider
              sx={{
                borderBottomWidth: "0.5px",
                borderColor: colors.secondaryText,
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
                color={colors.secondaryText}
                fontSize="12px"
              >
                Critic Score:
              </Typography>
              <CriticScore score={game.metacritic} />
              {/* <Typography variant="body2" color={colors.text} fontSize="12px">
                {formatRankAndDate(game.released, game.rating_top)}
              </Typography> */}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
