import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import UploadFileSharpIcon from "@mui/icons-material/UploadFileSharp";

const IconList = {
  UploadFileSharpIcon: <UploadFileSharpIcon />,
};

const BaseButton = (props) => {
  console.log(props.icon);
  return (
    <>
      <Button
        size="large"
        variant={props.valient}
        color={props.color}
        endIcon={IconList[props.icon]}
      >
        {props.name}
      </Button>
    </>
  );
};

export default BaseButton;
