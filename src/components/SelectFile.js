import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const SelectFile = (props) => {
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState();

  const selectFile = (e) => {
    const files = e.target.files[0];
    if (files) {
      setFile(files);
      setPreview(window.URL.createObjectURL(files));
    }
  };
  // const onProfileButtonClick = () => {
  //   // useRef<HTMLInputElement>のcurrent要素を呼び出し、ファイル選択画面を表示
  //   inputRef.current.click();
  // };

  return (
    <>
      {/* <input
        type="file"
        accept="image/*"
        className="upload-input"
        onChange={selectFile}
      />
      <div className="img-outer">
        <img src={preview} alt="" onerror="this.onerror = null; this.src='';" />
      </div> */}

      <img src={preview} alt="" onerror="this.onerror = null; this.src='';" />
      <input type="file" accept="image/*" onClick={selectFile} hidden />
      <Button
        variant="outlined"
        size="large"
        component="label"
        endIcon={<FolderOutlinedIcon />}
        // onClick={onProfileButtonClick}
      >
        Open Folder
      </Button>
    </>
  );
};

export default SelectFile;

//startIcon={IconList["A"]}
