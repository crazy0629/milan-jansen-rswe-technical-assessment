import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const CardWrapper = tw(Link)`w-full`;

export const ImageWrapper = tw.div`relative h-40 w-full border border-gray-500 transition-all hover:shadow-md`;

export const CardTitle = tw.h3`mt-4 text-center text-sm`;
