// import React, { useState } from "react";
// import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

// const cards = Array.from({ length: 15 }, (_, i) => ({
//   id: i + 1,
//   title: `Card ${i + 1}`,
//   description: `This is extra info about Card ${
//     i + 1
//   }. This text appears when you hover over the card.`,
// }));

// export default function HoverExpandGrid() {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <Grid container spacing={2} sx={{ padding: 2 }}>
//       {cards.map((card) => (
//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={4}
//           lg={3}
//           xl={2}
//           key={card.id}
//           sx={{ position: "relative" }}
//         >
//           <Box
//             sx={{
//               position: "relative",
//               width: 250, // Fixed width
//               height: 180, // Base height
//               transition: "transform 0.3s",
//               "&:hover": { zIndex: 10 }, // Bring to top on hover
//             }}
//           >
//             <Card
//               onMouseEnter={() => setHovered(card.id)}
//               onMouseLeave={() => setHovered(null)}
//               sx={{
//                 width: "100%",
//                 height: hovered === card.id ? 280 : 180, // Expand height on hover
//                 transition: "height 0.3s ease-in-out",
//                 position: "absolute", // Ensure overlap without pushing
//                 overflow: "visible",
//                 zIndex: hovered === card.id ? 10 : 1, // Bring expanded card to top
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {card.title}
//                 </Typography>

//                 {/* Extra content (appears only when hovered) */}
//                 {hovered === card.id && (
//                   <Box sx={{ marginTop: 2, color: "gray" }}>
//                     <Typography variant="body2">{card.description}</Typography>
//                   </Box>
//                 )}
//               </CardContent>
//             </Card>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
