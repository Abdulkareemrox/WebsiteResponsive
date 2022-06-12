import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ServicesWrapper = styled.div`
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
`;

export const ServicesIcon = styled.img`
  width: 60px;
  margin-top: 60px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #172755;
  margin-top: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Servicesimg = styled.h2`
  font-size: 1rem;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-top: 0vh;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 0vh;
`;

export const Subtitle = styled.p`
  max-width: 200vh;
  font-size: 18px;
  line-height: 24px;
  color: #8794ba;
  text-align: center;
`;

export const Divider = styled.div`
  margin: 50px 0px;
  border-bottom: 3px solid #bbb;
`;
