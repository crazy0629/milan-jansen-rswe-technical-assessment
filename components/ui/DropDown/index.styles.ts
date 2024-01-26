import tw from 'tailwind-styled-components';

export const Label = tw.span`text-base font-semibold mr-2`;

export const Icon = tw.span<{
  isOpen: boolean;
}>`${({ isOpen }) => (isOpen ? 'rotate-180' : 'rotate-0')} transition-all duration-300`;
