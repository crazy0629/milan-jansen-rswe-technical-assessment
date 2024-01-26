/** Created 'Custom DropDown component' by Milan 1/25/2024  */
'use client';

import React, { useState } from 'react';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles';

// Define the interface for Dropdown component
type DropDownProps = {
  label: string | React.ReactNode;
  list: string[] | React.ReactNode[];
};

export const DropDown: React.FC<DropDownProps> = ({ label, list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <UI.DropdownMenu onOpenChange={setIsOpen}>
      <UI.DropdownMenuTrigger className='flex items-center outline-none'>
        <TW.Label>{label}</TW.Label>
        <TW.Icon isOpen={isOpen}>
          <UI.ArrowDown />
        </TW.Icon>
      </UI.DropdownMenuTrigger>
      <UI.DropdownMenuContent>
        {list.map((item, index) => (
          <UI.DropdownMenuItem key={index}>{item}</UI.DropdownMenuItem>
        ))}
      </UI.DropdownMenuContent>
    </UI.DropdownMenu>
  );
};
