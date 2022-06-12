import React, { useState } from "react";
import {
  ServicesContainer,
  Subtitle,
  ServiceMain,
  ServicesH1,
  CoverBg,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  Divider,
  ServiceDollar,
  SubDivider,
  Dollar,
  ServicesH3
} from "./Services";
import BackgroundImg from "../../Images/background-bottom.png";
import { Button } from "../Sidebar/Button";
import Footer from "../Footer";
const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ServicesContainer id="services">
        
      <CoverBg>
        <img src={BackgroundImg} alt="bgimage" width="100%" />
        </CoverBg>

        <ServiceMain>
          <ServicesH1>Pricing Plans</ServicesH1>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.{" "}
          </Subtitle>

          <ServicesWrapper>
            <ServicesCard>
              <ServicesH3>Starter </ServicesH3>
              <ServicesH2>up to 3 users</ServicesH2>
              <SubDivider />
            <ServiceDollar> <div>&#36;</div><Dollar>29</Dollar></ServiceDollar> 

              <ServicesH2>
              per month
              </ServicesH2>

              <Button
                to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                light="true"
              >
                Order
              </Button>
            </ServicesCard>

            <ServicesCard>
              <ServicesH3>Standard</ServicesH3>
              <ServicesH2>up to 20 users</ServicesH2>
              <SubDivider />
              <ServiceDollar>  <div>&#36;</div><Dollar>99</Dollar> </ServiceDollar> 
              <ServicesH2>
              per month
              </ServicesH2>
              <Button
                to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                light="true"
              >
                Order
              </Button>
            </ServicesCard>

            <ServicesCard>
              <ServicesH3>Premium</ServicesH3>
              <ServicesH2>up to 200 users</ServicesH2>
              <SubDivider />
              <ServiceDollar>  <div>&#36;</div><Dollar>299</Dollar> </ServiceDollar> 
              <ServicesH2>
              per month
              </ServicesH2>
              <Button
                to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                light="true"
              >
                Order
              </Button>
            </ServicesCard>
          </ServicesWrapper>
          <Divider />

          <Footer />
        </ServiceMain>
    </ServicesContainer>
  );
};

export default Services;
