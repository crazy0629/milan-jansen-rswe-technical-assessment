import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`bg-[#F9F9F9] py-12 md:py-24`;

export const Container = tw.div`m-auto w-[95%] max-w-[1200px]`;

export const Title = tw.h1`mb-6 text-2xl font-semibold md:text-[34px]`;

export const ListItem = tw.div`relative mb-3 h-32 max-w-[400px] sm:w-full md:mb-8 md:h-[223px]`;

export const ListItemTitle = tw.h3`mb-2 line-clamp-2 text-sm font-semibold md:text-base hover:underline cursor-pointer`;

export const ListItemDescription = tw.p`line-clamp-2 text-sm`;

export const List = tw.div`grid grid-cols-1 gap-6 sm:grid-cols-3`;
