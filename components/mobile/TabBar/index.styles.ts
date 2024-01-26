import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`mb-6`;

export const TitleWrapper = tw.div`flex items-center justify-between px-6 pb-4 pt-3`;

export const Title = tw.h1`text-[28px] font-semibold`;

export const TabWrapper = tw.div`flex items-center border-b border-b-[#DFDFE1] px-3`;

export const TabItem = tw.div<{
  active: string | undefined;
}>`
    mx-3 cursor-pointer border-b-2 pb-5 pt-2 text-base font-semibold transition-all
    ${({ active }) => (active ? 'border-[#6C179A] text-[#6C179A]' : 'border-transparent text-black')}
`;
