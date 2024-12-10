import About from '../Components/About';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

// Export metadata for the page
export const metadata = {
  title: 'About Us |  digitallink Technology',
  description: 'Learn about Digitallink Technology\'s journey, mission, and vision for the future.',
  keywords: 'Digitallink Technology, about us, mission, vision, team , Digitallink saudi,  digital link,',
  openGraph: {
    title: 'About Us | digitallink Technology',
    description: 'Learn about digitallink Technology\'s journey, mission, and vision for the future.',
    url: 'https://digitallink-sa.com/about/',
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

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}