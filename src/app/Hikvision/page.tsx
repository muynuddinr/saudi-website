import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Hikvision from "../Components/hikvision";

export const metadata = {
  title: 'Hikvision | Digitallink Technology',
  description: 'Learn about Hikvision\'s journey, mission, and vision for the future.',
  keywords: 'Hikvision, about us, mission, vision, team , Digitallink saudi,  digital link,',
  openGraph: {
    title: 'About Us | digitallink Technology',
  description: 'Learn about Hikvision\'s journey, mission, and vision for the future.',
    url: 'https://digitallink-sa.com/hikvision/',
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
export default function HikvisionPage() {
  return (
    <div>
      <NavBar />
      <Hikvision />
      <Footer />
    </div>
  );
}

