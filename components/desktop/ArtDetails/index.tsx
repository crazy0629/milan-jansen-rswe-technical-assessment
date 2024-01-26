/** Created 'ArtDetails Section' by Milan 1/25/2024  */

import React from 'react';
import Image from 'next/image';
import * as UI from '@/components/ui'; // Import Components
import * as TW from './index.styles'; // Import Tailwind Modules

// Define the article infomations
const title = 'Biden sets electric vehicle target in drive to cut emissions';
const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const paragraph1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus faucibus massa. Mauris et morbi vitae habitant sit. Maecenas pretium in consectetur velit auctor. Porttitor tellus ut pretium, scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel dui, pulvinar vivamus lorem risus.';
const paragraph2 =
  'Bibendum aliquet adipiscing sed interdum. Arcu consequat fames blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed porttitor morbi lobortis mattis pellentesque. Dui quam sed eu ultrices ut nullam. Maecenas tortor auctor eros erat volutpat sapien dui pretium.';
const paragraph3 =
  'Hac sed diam tristique in consequat in suspendisse habitant. Et mauris venenatis posuere auctor tortor, placerat. Quisque tincidunt euismod dictum neque, massa nisi. Sagittis, dictum nibh bibendum cursus neque, nunc molestie. Odio viverra sagittis, platea nibh eget. Egestas a cras bibendum amet, mi magna cursus. Ante suscipit felis vitae amet.';
const relatedArts = [
  {
    type: 'Featured',
    title: 'The US President wants half of all new vehicles...',
  },
  { type: 'News', title: 'The US President wants half of all new vehicles...' },
  { type: 'News', title: 'The US President wants half of all new vehicles...' },
];

export const ArtDetails: React.FC = () => {
  return (
    <TW.Wrapper>
      {/* Article Details Section */}
      <TW.DetailsWrapper>
        <TW.DetailsDate>
          NEWS <TW.Dot />
          <span className='text-sm text-black opacity-55'>
            September 21, 2021
          </span>
        </TW.DetailsDate>
        <TW.DetailsTitle>{title}</TW.DetailsTitle>
        <TW.DetailsImage>
          <Image
            src={'/assets/testB/art.png'}
            alt='art-image'
            fill
            className='top-0 object-cover'
          />
        </TW.DetailsImage>
        <TW.DetailsSubtitle>{subtitle}</TW.DetailsSubtitle>
        <TW.DetailsDescription>
          <p className='mb-6 md:mb-8'>{paragraph1}</p>
          <p className='mb-6 md:mb-8'>{paragraph2}</p>
          <p>{paragraph3}</p>
        </TW.DetailsDescription>
      </TW.DetailsWrapper>

      {/* Related Articles Sticky Section */}
      <TW.RelatedArtsWrapper>
        <TW.RelatedTitle>Related Articles</TW.RelatedTitle>
        <TW.RelatedList>
          {relatedArts.map((art, index) => (
            <TW.RelatedListItem key={index}>
              <TW.RelatedListImage></TW.RelatedListImage>
              <div>
                <TW.RelatedListTitle>{art.type}</TW.RelatedListTitle>
                <TW.RelatedListSubTitle>{art.title}</TW.RelatedListSubTitle>
              </div>
            </TW.RelatedListItem>
          ))}
        </TW.RelatedList>
        <TW.RelatedMoreLink href='#'>
          <span className='mr-2'>View More</span> <UI.ArrowForwardIcon />
        </TW.RelatedMoreLink>
      </TW.RelatedArtsWrapper>
    </TW.Wrapper>
  );
};
