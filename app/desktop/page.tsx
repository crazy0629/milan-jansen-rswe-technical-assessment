/** Created 'Test B page' by Milan 1/25/2024 */

import * as Layout from '@/components/desktop';
import { PageHeader } from '@/components/PageHeader';

export default function TestB() {
  return (
    <main>
      <PageHeader />
      <Layout.ArtDetails />
      <Layout.OtherArts />
      <Layout.Footer />
      <Layout.Copyright />
    </main>
  );
}
