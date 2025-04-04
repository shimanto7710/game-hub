import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";

interface DescriptionToggleProps {
  description: string;
}

export const DescriptionToggle: React.FC<DescriptionToggleProps> = ({
  description,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  // Define the maximum number of characters to show when collapsed.
  const maxLength = 500;

  // Conditionally render a shortened version of the text if not expanded.
  const displayText =
    !expanded && description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;

  return (
    <Box>
      <Typography variant="body1" color="white">
        {displayText}
        {description.length > maxLength && (
          <Button
            onClick={toggleExpanded}
            sx={{
              color: "black",
              bgcolor: "white",
              fontSize: "10px",
              height: "16px",
            }}
          >
            {expanded ? "Read Less" : "Read More"}
          </Button>
        )}
      </Typography>
      {/* Render the toggle button only if the description exceeds maxLength */}
    </Box>
  );
};

export default DescriptionToggle;
