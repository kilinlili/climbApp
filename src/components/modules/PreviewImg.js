import React, { useState, useRef } from "react";
import { Button, Box, colors } from "@mui/material";
import { brown } from "@mui/material/colors";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import styled from "styled-components";

const PreviewImg = (props) => {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: 300,
          width: 300,
          objectFit: "contain",
          position: "relatice",
          zIndex: 1,
          maxHeight: { xs: 400, md: 400 },
          maxWidth: { xs: 400, md: 400 },
        }}
        src={props.preview}
        alt=""
      />
    </>
  );
};

export default PreviewImg;
