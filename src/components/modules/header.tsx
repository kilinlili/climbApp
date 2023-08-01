import React from "react";
import { OpenSideber } from "./leftDrawer";
import { useState } from "react";
import { brown } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            ></Drawer>
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
