import { useState } from "react";
import { Drawer } from "@mui/material";

export const OpenSideber = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Drawer>
    </>
  );
};
