import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Clients from '../Components/Clients';

export const metadata = {
    title: 'Our clients | Digitallink Technology',
    description: 'Learn about Our clients.',
    keywords: 'Our clients, about us, mission, vision, team , Digitallink saudi,  digital link,',
    openGraph: {
      title: 'Our clients | digitallink Technology',
    description: 'Learn about Our clients.',
      url: 'https://digitallink-sa.com/clients/',
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

const ClientsPage = () => {
    return (
        <div>
            <NavBar />
            <Clients />
            <Footer />
        </div>
    )
}

export default ClientsPage;
