/** Created 'NavigationBar Section' by Milan 1/25/2024  */
'use client';

import React, { useState } from 'react';
import * as UI from '@/components/ui'; // Import components
import * as TW from './index.styles'; // Import Tailwind Modules

const navData = [
  {
    icon: <UI.RocketIcon />,
    activeIcon: <UI.RocketIcon fill='#6C179A' />,
    label: 'Listing',
    index: 'listing',
  },
  {
    icon: <UI.PieChartIcon />,
    activeIcon: <UI.PieChartIcon fill='#6C179A' />,
    label: 'Research',
    index: 'research',
  },
  {
    icon: <UI.CrosshairIcon />,
    activeIcon: <UI.CrosshairIcon fill='#6C179A' />,
    label: 'Engage',
    index: 'engage',
  },
  {
    icon: <UI.HomeIcon />,
    activeIcon: <UI.HomeIcon fill='#6C179A' />,
    label: 'Community',
    index: 'community',
  },
  {
    icon: <UI.MixIcon />,
    activeIcon: <UI.MixIcon fill='#6C179A' />,
    label: 'Apps',
    index: 'apps',
  },
];

export const NavigationBar: React.FC = () => {
  const [currentNav, setCurrentNav] = useState('listing');
  return (
    <TW.Wrapper>
      {navData.map((nav, index) => (
        <UI.NavItem
          key={index}
          {...nav}
          active={currentNav === nav.index}
          onClick={() => setCurrentNav(nav.index)}
        />
      ))}
    </TW.Wrapper>
  );
};
