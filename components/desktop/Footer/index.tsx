/** Created 'Footer Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import components
import * as TW from './index.styles'; // Import Tailwind Modules

const navData = [
  {
    title: 'EVFY',
    links: ['Home', 'About EVFY', 'Contact Us', 'FAQ'],
  },
  {
    title: 'EV Cars',
    links: ['EV Brands', 'Car Types', 'EV Types'],
  },
  {
    title: 'News & Guides',
    links: ['Top News', 'EV Guides'],
  },
  {
    title: 'Terms',
    links: ['Cookies', 'Privacy', 'Legal'],
  },
  {
    title: 'Socials',
    links: ['Facebook', 'LinkedIn', 'Instagram', 'Twitter'],
  },
];

export const Footer: React.FC = () => {
  return (
    <TW.Wrapper>
      <Image
        src={'/assets/desktop/logo.png'}
        alt='footer-logo'
        width={210}
        height={39}
      />
      <TW.Content>
        <TW.Subscribe>
          <TW.SubscribeTitle>
            Stay up to date on the latest EVFY news
          </TW.SubscribeTitle>
          <TW.SubscribeDescription>
            Our newsletters are a concentrated blast of all the latest from
            EVFY: news, events, product information and more.
          </TW.SubscribeDescription>
          <UI.Button className='h-[51px] w-[171px] bg-[#0036C3] text-base font-semibold text-[#00F3B9] hover:bg-[#27375f]'>
            Subscribe
          </UI.Button>
        </TW.Subscribe>
        <TW.NavContainer>
          {navData.map((navs, index) => (
            <TW.NavListWrapper key={index}>
              <TW.NavListTitle>{navs.title}</TW.NavListTitle>
              {navs.links.map((link, lIndex) => (
                <TW.NavListItem href={'#'} key={lIndex}>
                  {link}
                </TW.NavListItem>
              ))}
            </TW.NavListWrapper>
          ))}
        </TW.NavContainer>
      </TW.Content>
    </TW.Wrapper>
  );
};
