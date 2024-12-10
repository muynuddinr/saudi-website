import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Privacy from '../Components/Privacy';

export const metadata = {
  title: 'Privacy Policy | Digitallink Technology',
  description: 'Learn about Digitallink Technology\'s journey, mission, and vision for the future.',
  keywords: 'Privacy Policy, about us, mission, vision, team , Digitallink saudi,  digital link,',
  openGraph: {
    title: 'Privacy Policy | digitallink Technology',
  description: 'Learn about Privacy Policy.',
    url: 'https://digitallink-sa.com/privacy/',
    siteName: 'Digitallink Technology',
    images: [
      {
        url: 'https://digitallink-sa.com/logo.png',
        width: 112,
        height: 112,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // JSON-LD can be added using a script tag in layout.js if needed
};
export default function Page() {
  return (
    <div>
      <NavBar />
      <Privacy />
      <Footer />
    </div>
  );
}

