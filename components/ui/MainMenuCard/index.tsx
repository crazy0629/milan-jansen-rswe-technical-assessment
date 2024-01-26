/** Created 'MainMenuCard component' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as TW from './index.styles'; // Import Tailwind Modules

// Define the interface for the Props of Main Menu Card
type MainMenuCardProps = {
  image: string;
  title: string;
  link: string;
};

export const MainMenuCard: React.FC<MainMenuCardProps> = ({
  image,
  link,
  title,
}) => {
  return (
    <TW.CardWrapper href={link}>
      <TW.ImageWrapper>
        <Image
          src={image}
          alt='main-card-image'
          fill
          className='object-cover object-top'
        />
      </TW.ImageWrapper>
      <TW.CardTitle>{title}</TW.CardTitle>
    </TW.CardWrapper>
  );
};
