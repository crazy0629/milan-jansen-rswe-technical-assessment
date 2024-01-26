/** Created 'MobileHeader Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

export const MobileHeader: React.FC = () => {
  return (
    <TW.MobileHeaderWrapper>
      <UI.Sheet>
        <UI.SheetTrigger>
          <UI.MenuIcon />
        </UI.SheetTrigger>
        <UI.SheetContent>
          <UI.SheetHeader>
            <UI.SheetTitle>
              <Image
                src={'/assets/desktop/logo.png'}
                alt='desktop-logo'
                width={153}
                height={29}
              />
            </UI.SheetTitle>
          </UI.SheetHeader>
          <div className='mt-4'>
            <UI.Accordion type='single' collapsible className='w-full'>
              <UI.AccordionCustomItem
                value='item-1'
                label='Find EV Cars'
                list={['Profile', 'Billing', 'Team', 'Subscription']}
              />
              <UI.AccordionCustomItem
                value='item-2'
                label='EV Guides'
                list={['Profile', 'Billing', 'Team', 'Subscription']}
              />
            </UI.Accordion>
            <TW.AuthNavs>
              <Link href='#' className='hover:underline'>
                Log In
              </Link>{' '}
              /{' '}
              <Link href='#' className='hover:underline'>
                Sign Up
              </Link>
            </TW.AuthNavs>
          </div>
        </UI.SheetContent>
      </UI.Sheet>
    </TW.MobileHeaderWrapper>
  );
};
