import React from "react";
import AllPro from "../Product Page/AllPro";
import ImageSlider from "./ImageSlider";
import Newsletter from "./Newsletter";
import Featured from "./Featured";


const Home = () => {
  return (
    <>
      <ImageSlider />
      <Featured 
      style={{marginTop: "10px", marginBottom: "5px", width: "90%"}}/>
      <AllPro 
      style={{
        margin: "auto"
      }}/>
      <Newsletter />
    </>
  );
};

export default Home;