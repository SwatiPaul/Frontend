import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  const data = [
    {
      image: require("../Images/slide_1.webp"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      image: require("../Images/slide_1.webp"),
      caption: "Caption",
      description: "Description Here",
    },
    {
      // image: require("../Images/istockphoto-515706776-612x612.jpg"),
      image: require("../Images/slide_1.webp"),
      caption: "Caption",
      description: "Description Here",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel_section'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className='d-block w-100'
                src={slide.image}
                alt='slider image'
              />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
