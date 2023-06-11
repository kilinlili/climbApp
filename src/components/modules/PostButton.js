import React, { useState, useRef } from "react";
import { Button, Box, colors } from "@mui/material";
import { brown } from "@mui/material/colors";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import styled from "styled-components";

const PostButton = () => {
  const [postDisp, setPostDisp] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        size="large"
        component="label"
        sx={{
          color: "white",
          background: brown[400],
          borderColor: brown.A700,
          position: "relative",
          zIndex: 0,
          ":hover": {
            color: "white",
            background: brown[600],
            borderColor: brown.A100,
          },
        }}
        endIcon={<VerticalAlignTopIcon />}
      >
        ホールドを検出する
      </Button>
    </>
  );
};

export default PostButton;
