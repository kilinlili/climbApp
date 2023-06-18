import React, { useState, useRef } from "react";
import { Button, Box, colors, Grid } from "@mui/material";
import { brown } from "@mui/material/colors";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import styled from "styled-components";
import { clear } from "@testing-library/user-event/dist/clear";
import PostButton from "./PostButton";
import PreviewImg from "./PreviewImg";

const SelectFile = (props) => {
  const [preview, setPreview] = useState("");
  //const [file, setFile] = useState();

  const inputRef = useRef(null);
  const [postDisp, setPostDisp] = useState(false);

  const fileUpload = () => {
    inputRef.current.click();
  };

  const previewImage = (e) => {
    const files = e.target.files;
    if (files?.length === 0) {
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]); //ここ上下はどちらでもOK
    reader.onload = (e) => {
      setPreview(e.target?.result);
      setPostDisp(true);
    };
  };

  return (
    <>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={previewImage}
      />
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Button
          variant="outlined"
          size="large"
          component="label"
          sx={{
            color: brown.A700,
            background: brown[100],
            borderColor: "#fff",
            ":hover": {
              color: brown.A700,
              background: brown[200],
              borderColor: "#fff",
            },
          }}
          endIcon={<FolderOutlinedIcon />}
          onClick={fileUpload}
        >
          Open Folder
        </Button>
        {preview && <PreviewImg preview={preview} />}
        {postDisp && <PostButton data={preview} />}
      </Grid>
    </>
  );
};

export default SelectFile;
