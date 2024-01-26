import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Wrapper = tw(Link)<{ active: string | undefined }>`
    flex cursor-pointer flex-col items-center transition-all
    ${({ active }) => (active ? 'text-[#6C179A]' : 'text-black')}
`;

export const Label = tw.p`mt-0.5 text-xs font-semibold`;
