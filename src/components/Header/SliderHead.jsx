import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import "./slideHead.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel_box">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sun9-45.userapi.com/c849236/v849236628/105115/ibKPE4GmpgQ.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sun9-87.userapi.com/impf/_IaiwSVlhXW4cBVoVyiMmAKrVCYCvWACm_k0Dg/cdCS-LAuB4A.jpg?size=1590x400&quality=95&crop=0,0,1590,400&sign=ad9dc7923e822c976ead4bc40bda2284&type=cover_group"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
