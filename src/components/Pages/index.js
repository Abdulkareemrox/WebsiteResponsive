import React from 'react';
import InfoSection from '../InfoSection';
import { aboutObj, discoverObj, signupObj } from '../InfoSection/Data';

const Home = () => {

  return (
    <>
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <InfoSection {...signupObj} />
    </>
  );
};

export default Home;
