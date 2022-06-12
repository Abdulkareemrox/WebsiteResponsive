import styled from "styled-components";

export const ServicesContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const CoverBg = styled.div`
  img {
    width: 100%;
    height: 900px;
  }

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    img {
      height: 200vh !important;
    }
  }
`;

export const ServicesWrapper = styled.div`
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto 0 50px;
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
    margin: 0;
    // margin-left: -44px;
  }
`;

export const ServiceDollar = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30vh;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH3 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #8794ba;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  line-height: 24px;
  color: #8794ba;
  text-align: center;
  margin-top: 35px;
  text-align: center;
`;

export const Divider = styled.div`
  margin: 40px;
  border-bottom: 1px solid #8794ba;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubDivider = styled.div`
  margin: 20px;
  border-bottom: 1px solid #d3d9e9;
  width: 100%;
`;

export const ServiceMain = styled.div`
  position: absolute;
  top: 15%;
  left: 16%;

  @media screen and (max-width: 768px) {
    top: 40%;
  }
`;

export const Dollar = styled.div`
  color: #000;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  align-items: baseline;
`;
