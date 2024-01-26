import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`m-auto w-[95%] max-w-[1200px] py-12 md:py-24`;

export const Content = tw.div`mt-8 flex flex-col md:mt-14 lg:flex-row`;

export const Subscribe = tw.div`max-w-[768px] lg:max-w-[282px]`;

export const SubscribeTitle = tw.h5`mb-4 text-2xl font-semibold`;

export const SubscribeDescription = tw.p`mb-6 text-base opacity-55`;

export const NavContainer = tw.div`grid flex-1 grid-cols-2 justify-between pt-10 sm:flex lg:pl-[126px] lg:pt-0`;

export const NavListWrapper = tw.div`mb-3 ml-3 flex min-w-[78px] flex-col sm:mb-0`;

export const NavListTitle = tw.h6`mb-7 text-base font-semibold`;

export const NavListItem = tw(Link)`mb-4 text-sm hover:underline`;
