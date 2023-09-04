import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeatureImage from "../Components/Home/FeatureImage";
import Trending from "../Components/Home/Trending";
import Popular from "../Components/Home/Popular";
import UpComing from "../Components/Home/Upcoming";


function Home() {

return (
    <Container>
      <FeatureImage />
      <Trending />
      <Popular />
      <UpComing />
    </Container>
  );
}
const Container = styled.main`
  background-color:black;
  overflow: hidden;
  z-index:-1;
`;
export default Home;