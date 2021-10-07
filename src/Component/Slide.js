import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import GuideDog1 from "../Resource/Image/guide_dog_1.png"
import GuideDog2 from "../Resource/Image/guide_dog_2.png"
import GuideDog3 from "../Resource/Image/guide_dog_3.png"
import GuideDog4 from "../Resource/Image/guide_dog_4.png"
import GuideDog5 from "../Resource/Image/guide_dog_5.png"


const items = [
  {
    src: GuideDog1,
    //altText: 'Slide 1',
    //caption: 'Slide 1'
  },
  {
    src: GuideDog2,
    //altText: 'Slide 2',
    //caption: 'Slide 2'
  },
  {
    src: GuideDog3,
    //altText: 'Slide 2',
    //caption: 'Slide 2'
  },
  {
    src: GuideDog4,
    //altText: 'Slide 2',
    //caption: 'Slide 2'
  },
  {
    src: GuideDog5,
    //altText: 'Slide 3',
    //caption: 'Slide 3'
  }
];

const Slide = (props) => {
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
        className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
    <style>
        {
          `.custom-tag {
              max-width: 100%;
              max-height: 10000px;
            }
            img {
              max-width: 100%;
              max-height: 100%;
              object-fit: cover;
            }
            div.div-slider {
              margin: auto;
              width: 100%;
            }`
        }
      </style>
    <div class="div-slider">
    <Carousel
      className="custom-tag"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
    </div>
  );
}

export default Slide;
