import styled from 'styled-components';

export const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const CoverContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 40px;

  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  color: #8794BA;
  font-size: 24px;
  max-width: 600px;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 30px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageConatiner= styled.div`
margin-left: auto;
margin-top:325px;
img{
width: 600px;
}
@media screen and (max-width: 768px) {
display: none;
}
`;

export const Button = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 70px;
    height: 50px;
    background: #EF2A82;
    border-radius: 68px;
    color: #fff;
`;