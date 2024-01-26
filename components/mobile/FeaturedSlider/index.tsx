/** Created 'FeatureSlider Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

const sliderData = [
  {
    image: '/assets/testA/featured/1.png',
    title: 'Focus',
    description: 'Search across hundreds of new launches',
  },
  {
    image: '/assets/testA/featured/2.png',
    title: 'Market Trends',
    description: 'Your trusted market analysis tool',
  },
  {
    image: '/assets/testA/featured/3.png',
    title: 'GeoLocation',
    description: 'Search properties by geolocation',
  },
];

export const FeaturedSlider: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.TitleWrapper>
        <TW.Title>{'Featured'}</TW.Title>
        <UI.ArrowRight />
      </TW.TitleWrapper>
      <UI.Carousel>
        <UI.CarouselContent>
          {sliderData.map((slider, index) => (
            <UI.CarouselItem key={index}>
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
