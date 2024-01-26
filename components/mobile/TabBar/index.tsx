/** Created 'TabBar Section' by Milan 1/25/2024  */
'use client';

import React, { useState } from 'react';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

const tabData = [
  { label: 'All', index: 'all' },
  { label: 'Tools', index: 'tools' },
  { label: 'Calculators', index: 'calculators' },
  { label: 'Forms', index: 'forms' },
  { label: 'GPTs', index: 'gpts' },
];

export const TabBar: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('all');

  return (
    <TW.Wrapper>
      <TW.TitleWrapper>
        <TW.Title>{'App Store'}</TW.Title>
        <UI.SearchIcon />
      </TW.TitleWrapper>
      <TW.TabWrapper>
        {tabData.map((tab, index) => (
          <TW.TabItem
            key={index}
            onClick={() => setCurrentTab(tab.index)}
            active={currentTab === tab.index ? 'true' : undefined}
          >
            {tab.label}
          </TW.TabItem>
        ))}
      </TW.TabWrapper>
    </TW.Wrapper>
  );
};
