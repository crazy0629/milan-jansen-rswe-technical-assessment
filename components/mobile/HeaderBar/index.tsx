/** Created 'HeaderBar Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

export const HeaderBar: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.LogoWrapper>
        <Image
          src={'/assets/testA/logo.png'}
          alt='test-a-logo'
          fill
          className='object-cover'
        />
      </TW.LogoWrapper>
      <TW.SearchWrapper>
        <UI.Input
          className='h-10 w-full border-none bg-transparent text-sm'
          placeholder='Search for a property'
        />
        <TW.IconWrapper>
          <UI.MixHorizontalIcon />
        </TW.IconWrapper>
      </TW.SearchWrapper>
      <TW.AvatarWrapper>
        <Image
          src={'/assets/testA/avatar.png'}
          alt='test-a-avatar'
          fill
          className='object-cover'
        />
      </TW.AvatarWrapper>
    </TW.Wrapper>
  );
};
