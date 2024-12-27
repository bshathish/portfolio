"use client";
import { Container } from "@mui/material";
import App from "./components/main";
import { ThemeWrapper } from "./ThemeProvider";

export default function Home() {
  return (
      <ThemeWrapper>
          <App/>
      </ThemeWrapper>
  );
}
