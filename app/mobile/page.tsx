/** Created 'Test A page' by Milan 1/25/2024 */

import * as Layout from '@/components/mobile'; // Import Sections for Test A page
import * as TW from './page.styles'; // Import Tailwind Modules

export default function TestA() {
  return (
    <TW.Wrapper>
      <TW.Container>
        <TW.Content>
          <Layout.HeaderBar />
          <Layout.TabBar />
          <Layout.FeaturedSlider />
          <Layout.PopularSlider />
        </TW.Content>
        <Layout.NavigationBar />
      </TW.Container>
    </TW.Wrapper>
  );
}
