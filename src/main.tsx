import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { RegisterActivity } from "./pages/RegisterActivity/index.tsx";

import theme from "./themes/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RegisterActivity />
    </ThemeProvider>
  </StrictMode>
);
