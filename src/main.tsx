import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./components/theme";
import "./index.css";
import { MainPage } from "./pages/MainPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

<ChakraProvider>
  {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
  <MainPage />
</ChakraProvider>;
