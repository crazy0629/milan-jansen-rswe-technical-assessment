/** Created 'Copyright Section' by Milan 1/25/2024  */

import React from 'react';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

export const Copyright: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.Text>
        &copy; Copyright {new Date().getFullYear()} EVFY Pte Ltd. All Rights
        Reserved.
      </TW.Text>
      <UI.FlagDropdown />
    </TW.Wrapper>
  );
};
