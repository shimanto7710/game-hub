import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

interface HoverBadgeProps {
  text: string;
  icon: ReactElement;
  onClick?: () => void; // Optional click handler
}

export default function HoverBadge({ text, icon, onClick }: HoverBadgeProps) {
  // Clone the icon to enforce styling while preserving props
  const iconWithStyle = React.cloneElement(icon, {
    sx: { fontSize: "24px" },
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        marginBottom: "8px",
        cursor: "pointer", // Indicate it's clickable
        "&:hover .iconContainer": {
          backgroundColor: "#fff",
          color: "#000",
        },
      }}
      onClick={onClick} // Attach click event
    >
      <Box
        className="iconContainer"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "4px",
          padding: "0 4px",
          marginLeft: "40px",
          height: "32px",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {iconWithStyle}
      </Box>
      <Typography color="#fff" fontSize="15px" ml={1}>
        {text}
      </Typography>
    </Box>
  );
}
