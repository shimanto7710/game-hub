// import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
// import "./App.css";
// import { NavBar } from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import { GenreList } from "./components/GenreList";
// import { useState } from "react";
// import { Genre } from "./hooks/useGenres";
// import { PlatformSelector } from "./components/PlatformSelector";
// import { Platform } from "./hooks/useGames";
// import { SortSelector } from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";

// export interface GameQuery {
//   genre: Genre | null;
//   platform: Platform | null;
//   sortOrder: string;
//   searchText: string;
// }

// function App() {
//   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "250px 1fr",
//       }}
//       gap={6}
//     >
//       <GridItem area="nav">
//         <NavBar
//           onSearch={(searchText) => {
//             setGameQuery({ ...gameQuery, searchText });
//           }}
//         />
//       </GridItem>

//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList
//             selectedGenre={gameQuery.genre}
//             onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
//           />
//         </GridItem>
//       </Show>

//       <GridItem area="main">
//         <Box paddingLeft={2}>
//           <GameHeading gameQuery={gameQuery} />

//           <Flex marginBottom={5} direction={{ base: "column", lg: "row" }}>
//             <Box marginBottom={{ base: 4, lg: 0 }} marginRight={{ lg: 4 }}>
//               <PlatformSelector
//                 onSelectedPlatform={(platform) => {
//                   setGameQuery({ ...gameQuery, platform });
//                 }}
//                 selectedPlatform={gameQuery.platform}
//               />
//             </Box>

//             <SortSelector
//               sortdOrder={gameQuery.sortOrder}
//               onSelectedSortOrder={(sortOrder) => {
//                 setGameQuery({ ...gameQuery, sortOrder });
//               }}
//             />
//           </Flex>
//         </Box>

//         <GameGrid gameQuery={gameQuery} />
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

const AppRoutes = () => {
  return useRoutes(routes); // Correct way to use `useRoutes()`
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
