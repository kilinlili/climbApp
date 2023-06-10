import React, { useState, useRef } from "react";
import { Button, Box } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import styled from "styled-components";

const SelectFile = (props) => {
  const [preview, setPreview] = useState("");
  //const [file, setFile] = useState();

  const inputRef = useRef(null);

  const fileUpload = () => {
    inputRef.current.click();
  };

  const previewImage = (e) => {
    const files = e.target.files;
    if (files?.length === 0) {
      return;
    }
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    // reader.onload = (e) => {
    //   setPreview(e.target?.result);
    // };
    reader.addEventListener("load", (e) => {
      console.log(e.target.result);
      setPreview(e.target?.result);
    });
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
      <div>
        {/* {TODO:画像比率は保持したい} */}
        {preview && (
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              maxHeight: { xs: 400, md: 400 },
              maxWidth: { xs: 400, md: 400 },
            }}
            src={preview}
            alt=""
          />
        )}
      </div>
      <Button
        variant="outlined"
        size="large"
        component="label"
        endIcon={<FolderOutlinedIcon />}
        onClick={fileUpload}
      >
        Open Folder
      </Button>
    </>
  );
};

export default SelectFile;
