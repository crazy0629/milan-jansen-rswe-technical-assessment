import * as UI from '@/components/ui'; // Import Components
import * as TW from './page.styles'; // Import Tailwind Modules

// Define Data for Main Menu Cards
const mainCards = [
  {
    image: '/assets/mainpage/test-a.png',
    title: 'Testing for Mobile Version',
    link: '/mobile',
  },
  {
    image: '/assets/mainpage/test-b.png',
    title: 'Testing for Full Responsive Page',
    link: '/desktop',
  },
];

// Main page to navigate to each test page
export default function MainPage() {
  return (
    <TW.Wrapper>
      <TW.Title>
        {
          'One X Tech Technical Assessment for Remote Software Engineer Role 2024'
        }
      </TW.Title>
      <TW.SubTitle>{'(Milan Jansen)'}</TW.SubTitle>
      <TW.CardGrid>
        {mainCards.map((card, index) => (
          <UI.MainMenuCard
            key={index}
            image={card.image}
            link={card.link}
            title={card.title}
          />
        ))}
      </TW.CardGrid>
    </TW.Wrapper>
  );
}
