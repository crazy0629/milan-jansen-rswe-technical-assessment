/** Created 'Custom Accordion Item component' by Milan 1/25/2024  */

import React from 'react';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

// Define the interface for Dropdown component
type AccordionItemProps = {
  label: string | React.ReactNode;
  list: string[] | React.ReactNode[];
  value: string;
};

export const AccordionCustomItem: React.FC<AccordionItemProps> = ({
  label,
  list,
  value,
}) => {
  return (
    <UI.AccordionItem value={value}>
      <UI.AccordionTrigger>{label}</UI.AccordionTrigger>
      <UI.AccordionContent className='flex flex-col'>
        {list.map((item, index) => (
          <TW.AccordionLink href={'#'} key={index}>
            - {item}
          </TW.AccordionLink>
        ))}
      </UI.AccordionContent>
    </UI.AccordionItem>
  );
};
