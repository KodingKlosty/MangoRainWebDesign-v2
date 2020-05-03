import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// style import
import '../../styles/carousel.scss'
//image import
import eSignout from '../../imgs/eSignout.png';
import todo from '../../imgs/todo.png';


const items = [
  {
    src: eSignout,
    link: 'http://192.168.1.101:3000',
    altText: 'eSignout',
    caption: 'An Employee Tracking App'
  },
  {
    src: todo,
    link: 'http://localhost:3001',
    altText: 'Todos',
    caption: 'A simple ToDo list'
  },
  {
    src: 'https://via.placeholder.com/1000x500?text=Picture+Selction+Needed',
    link: 'https://www.yahoo.com',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const SiteMover = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.link}>
            <img src={item.src} alt={item.altText} />
        </a>
        
        <CarouselCaption  captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SiteMover;