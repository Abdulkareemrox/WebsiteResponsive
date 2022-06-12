import React from "react";
import {
  CoverContainer,
  CoverBg,
  CoverContent,
  CoverH1,
  CoverP,
  CoverBtnWrapper,
  Button,
  ImageConatiner,
} from "./CoverSection";

import BgImage from "../../Images/background-top.png";
import MainScreen from "../../Images/main-screen.png";
import Header from "../Header";

const CoverSection = () => {
  return (
    <CoverContainer>
      <CoverBg>
        <img src={BgImage} alt="bgimage" />
      </CoverBg>
      <Header />

      <CoverContent>
        <CoverP>
          <CoverH1>Monitor your business on real-time dashboard</CoverH1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam.
        <CoverBtnWrapper>
          <Button
            to="signup"
            primary="true"
            dark="true"
          >
           Try for free
          </Button>
        </CoverBtnWrapper>
        </CoverP>

        <ImageConatiner>
          <img src={MainScreen} alt="main-screen" />
        </ImageConatiner>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
