import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { brown } from "@mui/material/colors";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

const PostButton = (data) => {
  const [image, setImage] = useState("sample");

  const uploadImage = async () => {
    const base64img = image?.replace(/^data:image\/jpeg;base64,/, "");
    return fetch("http://localhost:8000/user/uploadImage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: base64img,
        name: "testsssss",
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setImage(data.data);
  }, [data]);

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
        onClick={uploadImage}
      >
        ホールドを検出する
      </Button>
    </>
  );
};

export default PostButton;
