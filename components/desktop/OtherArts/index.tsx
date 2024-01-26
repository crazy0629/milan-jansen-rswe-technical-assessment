/** Created 'OtherArts Section' by Milan 1/25/2024  */

import Image from 'next/image';
import React from 'react';
import * as TW from './index.styles'; // Import Tailwind Modules

const artData = [
  {
    image: '/assets/testB/art1.png',
    title:
      'The US President wants half of all new vehicles to be zero emissions by 2030',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam',
  },
  {
    image: '/assets/testB/art2.png',
    title:
      'The US President wants half of all new vehicles to be zero emissions by 2030',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam',
  },
  {
    image: '/assets/testB/art3.png',
    title:
      'The US President wants half of all new vehicles to be zero emissions by 2030',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam',
  },
];

export const OtherArts: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.Container>
        <TW.Title>Other Articles You May Like</TW.Title>
        <TW.List>
          {artData.map((art, index) => (
            <div key={index}>
              <TW.ListItem>
                <Image
                  src={art.image}
                  alt={`art-image-${index}`}
                  fill
                  className='rounded-sm object-cover'
                />
              </TW.ListItem>
              <TW.ListItemTitle>{art.title}</TW.ListItemTitle>
              <TW.ListItemDescription>{art.description}</TW.ListItemDescription>
            </div>
          ))}
        </TW.List>
      </TW.Container>
    </TW.Wrapper>
  );
};
