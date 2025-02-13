import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <ChakraProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ChakraProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
