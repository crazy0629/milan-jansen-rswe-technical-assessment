/** Created 'PageHeader Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules
import { MobileHeader } from './MobileHeader';

export const PageHeader: React.FC = () => {
  return (
    <TW.Wrapper>
      <TW.NavWrapper className='flex items-center'>
        <Image
          src={'/assets/desktop/logo.png'}
          alt='desktop-logo'
          width={153}
          height={29}
        />
        <TW.NavDropdown>
          <UI.DropDown
            label='Find EV Cars'
            list={['Profile', 'Billing', 'Team', 'Subscription']}
          />
        </TW.NavDropdown>
        <TW.NavDropdown>
          <UI.DropDown
            label='EV Guides'
            list={['Profile', 'Billing', 'Team', 'Subscription']}
          />
        </TW.NavDropdown>
      </TW.NavWrapper>
      <TW.AuthWrapper>
        <div className='mr-8'>
          <UI.FlagDropdown />
        </div>
        <TW.AuthNavs>
          <Link href='#' className='hover:underline'>
            Log In
          </Link>{' '}
          /{' '}
          <Link href='#' className='hover:underline'>
            Sign Up
          </Link>
        </TW.AuthNavs>
      </TW.AuthWrapper>
      {/* Mobile Header */}
      <MobileHeader />
    </TW.Wrapper>
  );
};
