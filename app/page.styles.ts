/** Created 'tailwind styled components for MainPage' by Milan 1/25/2024 */

import tw from 'tailwind-styled-components';

export const Wrapper = tw.main`m-auto flex min-h-screen max-w-[768px] flex-col items-center justify-center px-5 py-6`;

export const Title = tw.h1`pb-6 max-w-[500px] text-center text-2xl`;

export const SubTitle = tw.h2`pb-20 text-xl text-center`;

export const CardGrid = tw.div`grid w-full grid-cols-1 sm:grid-cols-2 gap-10`;
