import React from "react";
import { Box, styled, Typography } from "@material-ui/core";
import Typewriter from "typewriter-effect";

interface Props {

}

const StyledBox = styled(Box)({
  position: "fixed",
  top: 0
});

const ImageBox = styled(Box)({
  height: "50vh",
  width: "100vw",
  position: "relative"
});

const StyledImg = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  position: "absolute"
});

const StyledTypewriter = styled(Typography)({
  position: "absolute"
});

function LandingHero({}: Props) {
  return (
    <StyledBox>
      <ImageBox>
        <StyledImg src="/assets/landing.jpg" alt=""/>
        <Typography variant={"h1"}>
          Syra
        </Typography>
        <StyledTypewriter variant={"h2"}>
          <Typewriter
            options={{
              strings: ["Be creative. Together.", "Collaborate with your friends. Anytime.", "Record and Mix. Everywhere."],
              autoStart: true,
              loop: true
            }}
          />
        </StyledTypewriter>
      </ImageBox>
    </StyledBox>
  );
}

export default LandingHero;
