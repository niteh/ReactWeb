import React from "react"
import CarouselContent   from "./CarouselContent";
import SampleContent from "./SampleContent";
import webFirst from "../src/images/map-viwer5.png";
import Heading from "./Heading";



const Home = () => {
  return (
    <>



<CarouselContent />
<Heading heading="About Us" />
<SampleContent imgSrc={webFirst} contentText="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>



   
    </>
  );
}

export default Home;