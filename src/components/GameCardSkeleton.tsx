import { Box, Card, CardContent, Skeleton } from "@mui/material";

export const GridCardSkeleton = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 270,
        minHeight: "auto",
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
        {/* Image Skeleton */}
        <Skeleton
          variant="rectangular"
          width="100%"
          height={152}
          sx={{
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
            gap: 2,
          }}
        >
          {/* Platforms and Score Skeleton */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Skeleton variant="rounded" width="60%" height={24} />
            <Skeleton variant="rounded" width={40} height={24} />
          </Box>

          {/* Title Skeleton */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Skeleton variant="text" width="90%" height={28} />
            <Skeleton variant="text" width="80%" height={28} />
          </Box>

          {/* Metadata Skeletons */}
          {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Skeleton variant="text" width="70%" height={16} />
            <Skeleton variant="text" width="60%" height={16} />
            <Skeleton variant="text" width="65%" height={16} />
          </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
};
