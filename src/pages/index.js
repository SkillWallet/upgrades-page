import React from "react";
import Banner from "containers/Banner";
import MainWrapper from "./_main_wrapper";
import Upgrades from "containers/Upgrades";

const Main = () => {
  return (
    <MainWrapper>
      <Banner />
      <Upgrades />
    </MainWrapper>
  );
};
export default Main;
