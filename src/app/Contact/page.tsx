import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
    
export const metadata = {
    title: 'Contact Us | Digitallink Technology',
    description: 'Contact Digitallink Technology for inquiries, support, or to learn more about our services.',
    keywords: 'Digitallink Technology, contact, support, inquiries, Digitallink saudi,  digital link,',
    openGraph: {
      title: 'Contact Us | digitallink Technology',
      description: 'Contact Digitallink Technology for inquiries, support, or to learn more about our services.',
      url: 'https://digitallink-sa.com/contact/',
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
const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage;