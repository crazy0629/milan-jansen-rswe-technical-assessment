import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`fixed bottom-[100px] right-0 z-10 flex flex-col space-y-4`;

export const NavLink = tw(
  Link
)`flex h-10 w-10 translate-x-3 items-center justify-center border border-gray-300 shadow-lg transition-all duration-300 hover:translate-x-0`;
