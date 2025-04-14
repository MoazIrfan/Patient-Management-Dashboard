import React from "react";
import { styled } from "@mui/material";


const StyledLogo = styled("img")(() => ({
  height: 36,
}));

const Logo: React.FC = () => (
  <StyledLogo
    src="https://cdn.prod.website-files.com/67a6c5b1c8897048b4a35bd1/67b1a02de10ecbb57743481f_full.png"
    alt="Logo"
/>
);

export default Logo;