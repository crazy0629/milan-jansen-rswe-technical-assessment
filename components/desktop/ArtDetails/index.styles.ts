import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`relative m-auto flex w-[95%] max-w-[1200px] pb-10 pt-10 sm:pb-20`;

export const DetailsWrapper = tw.div`w-full max-w-[752px] flex-1`;

export const DetailsDate = tw.div`mb-4 flex items-center text-xs font-semibold text-[#0036C3]`;

export const Dot = tw.span`mx-2 h-[3px] w-[3px] rounded-full bg-[#0036C3]`;

export const DetailsTitle = tw.h1`mb-8 text-4xl font-semibold md:mb-12 md:text-5xl`;

export const DetailsImage = tw.div`relative w-full pb-[70%]`;

export const DetailsSubtitle = tw.p`mb-10 mt-4 text-base opacity-85`;

export const DetailsDescription = tw.div`text-lg md:text-xl`;

export const RelatedArtsWrapper = tw.div`sticky top-10 ml-8 hidden h-fit w-full max-w-[250px] md:block lg:ml-16 lg:max-w-[384px]`;

export const RelatedTitle = tw.h2`mb-6 text-xl font-semibold`;

export const RelatedList = tw.div`space-y-8`;

export const RelatedListItem = tw.div`flex items-center border-b border-[#BDBDBD30] pb-8`;

export const RelatedListImage = tw.div`mr-6 h-[78px] min-w-[78px] rounded-sm bg-[#F4F4F4]`;

export const RelatedListTitle = tw.span`mb-2 text-xs font-semibold text-[#0036C3]`;

export const RelatedListSubTitle = tw.h2`line-clamp-2 text-base font-semibold opacity-90 hover:underline cursor-pointer`;

export const RelatedMoreLink = tw(
  Link
)`mt-2 inline-flex items-center text-sm text-[#0036C3]`;
