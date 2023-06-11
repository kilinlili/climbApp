import React, { useState, useRef } from "react";
import { brown } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
    ].join(","),
  },
});

export const SlideHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: brown.A700 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              climbApp
            </Typography>
            <Button color="inherit">How to Use</Button>
            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
