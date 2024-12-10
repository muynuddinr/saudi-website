import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Dahua from "../Components/Dahua";

export const metadata = {
  title: 'Dahua | Digitallink Technology',
  description: 'Learn about Dahua\'s journey, mission, and vision for the future.',
  keywords: 'Dahua, about us, mission, vision, team , Digitallink saudi,  digital link,',
  openGraph: {
    title: 'Dahua | digitallink Technology',
  description: 'Learn about Dahua\'s journey, mission, and vision for the future.',
    url: 'https://digitallink-sa.com/dahua/',
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
export default function DahuaPage() {
  return (
    <div>
      <NavBar />
      <Dahua />
      <Footer />
    </div>
  );
}