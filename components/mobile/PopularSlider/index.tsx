/** Created 'PopularSlider Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

const sliderData = [
  {
    image: '/assets/testA/popular/1.png',
    title: 'eValuation',
    description: 'Get multiple valuations',
  },
  {
    image: '/assets/testA/popular/2.png',
    title: 'Latest Transactions',
    description: 'Discover the latest...',
  },
  {
    image: '/assets/testA/popular/3.png',
    title: 'Gains & Losses',
    description: 'Find record setters',
  },
];

export const PopularSlider: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.TitleWrapper>
        <TW.Title>{'Popular'}</TW.Title>
        <UI.ArrowRight />
      </TW.TitleWrapper>
      <UI.Carousel>
        <UI.CarouselContent>
          {sliderData.map((slider, index) => (
            <UI.CarouselItem key={index} className='basis-1/2'>
              <TW.ImageWrapper>
                <Image
                  src={slider.image}
                  alt={`featured-slider-${index}`}
                  fill
                  className='rounded-[20px] object-cover'
                />
              </TW.ImageWrapper>
              <TW.ImageTitle>{slider.title}</TW.ImageTitle>
              <TW.ImageDescription>{slider.description}</TW.ImageDescription>
            </UI.CarouselItem>
          ))}
        </UI.CarouselContent>
      </UI.Carousel>
    </TW.Wrapper>
  );
};
