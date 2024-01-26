// Define the interface for the Props of Main Menu Card

import React from 'react';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

export const Navigation: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.NavLink href={'/'}>
        <UI.NavHomeIcon />
      </TW.NavLink>
      <TW.NavLink href={'/mobile'}>
        <UI.NavMobileIcon />
      </TW.NavLink>
      <TW.NavLink href={'/desktop'}>
        <UI.NavDesktopIcon />
      </TW.NavLink>
    </TW.Wrapper>
  );
};
