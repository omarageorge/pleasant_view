import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const SlideData = [
  { url: '/thumb0.jpg' },
  { url: '/thumb1.jpg' },
  { url: '/thumb2.jpg' },
  { url: '/thumb3.jpg' },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = SlideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    let timOut = setTimeout(nextSlide, 3000);
    return () => {
      clearTimeout(TimeRanges);
    };
  }, [current]);

  return (
    <Slider>
      {SlideData.map((image, index) => {
        return (
          <Container
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <Image src={image.url} alt={`image ${index} `} />
          </Container>
        );
      })}
    </Slider>
  );
};

export default Carousel;
