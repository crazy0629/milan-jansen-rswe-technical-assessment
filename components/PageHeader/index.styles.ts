import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`m-auto flex h-16 max-w-[1200px] items-center justify-between bg-white px-6`;

export const NavWrapper = tw.div`flex items-center`;

export const AuthWrapper = tw.div`hidden items-center md:flex`;

export const AuthNavs = tw.div`text-base font-semibold`;

export const NavDropdown = tw.div`ml-8 hidden md:block`;

export const MobileHeaderWrapper = tw.div`block md:hidden`;
