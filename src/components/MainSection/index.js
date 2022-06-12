import React from "react";
import clock from '../../Images/clock_icon.png';
import Widget from '../../Images/widget_Icon.png';
import {
  ServicesContainer,
  Subtitle,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  Servicesimg,
  ServicesH2,
  ServicesP,
} from "./MainSection";
const Services = () => {
  return (
    <ServicesContainer id="services">
          <ServicesH1>Main Features</ServicesH1>
          <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.Id vel in nam malesuada..{" "}
          </Subtitle>
          <ServicesWrapper>
            <ServicesCard>
              <Servicesimg><img src={clock} alt="clock"/></Servicesimg>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>
                We help reduce your fees and increase your overall revenue
              </ServicesP>
            </ServicesCard>

            <ServicesCard>
            <Servicesimg><img src={Widget} alt="widget"/></Servicesimg>
              <ServicesH2>Virtual Offices</ServicesH2>
              <ServicesP>
                You can access our platform online anywhere in the world
              </ServicesP>
            </ServicesCard>

            <ServicesCard>
            <Servicesimg><img src={Widget} alt="widget"/></Servicesimg>
              <ServicesH2>Premium Benefits</ServicesH2>
              <ServicesP>
                Unlock our special membership card and get 5% cashback
              </ServicesP>
            </ServicesCard>
          </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
