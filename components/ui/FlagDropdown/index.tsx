/** Created 'Flag Dropdown component' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

export const FlagDropdown: React.FC = () => {
  return (
    <UI.DropDown
      label={
        <Image
          src='/assets/desktop/flag.png'
          alt='temp-flag'
          width={28}
          height={18}
        />
      }
      list={[
        <TW.IconWrapper key={0}>
          <Image
            src='/assets/desktop/flag.png'
            alt='temp-flag'
            width={28}
            height={18}
          />
          <TW.LabelWrapper>English</TW.LabelWrapper>
        </TW.IconWrapper>,
        <TW.IconWrapper key={1}>
          <Image
            src='/assets/desktop/flag.png'
            alt='temp-flag'
            width={28}
            height={18}
          />
          <TW.LabelWrapper>Chinese</TW.LabelWrapper>
        </TW.IconWrapper>,
      ]}
    />
  );
};
