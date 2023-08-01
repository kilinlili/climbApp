import { Box } from "@mui/material";

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
