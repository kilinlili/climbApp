import React, { useState, useRef } from "react";
import { Button, Input } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const SelectFile = (props) => {
  const [preview, setPreview] = useState("");
  //const [file, setFile] = useState();

  const inputRef = useRef(null);

  const fileUpload = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input hidden ref={inputRef} type="file" accept="image/*" />
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
