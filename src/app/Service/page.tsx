import Head from 'next/head';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Service from '../Components/Service';

export const metadata = {
  title: 'Our services | Digitallink Technology',
  description: 'Learn about Our services.',
  keywords: 'Our services, about us, mission, vision, team , Digitallink saudi,  digital link,',
  openGraph: {
    title: 'Our services | digitallink Technology',
    description: 'Learn about Our services.',
    url: 'https://digitallink-sa.com/service/',
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
  }
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Our Services - Digitallink Technology</title>
        <meta name="description" content="Learn about Our services at Digitallink Technology. We provide innovative digital solutions tailored to your needs." />
        <meta name="keywords" content="Our services, about us, mission, vision, team, Digitallink saudi, digital link" />
      </Head>
      <div>
        <NavBar />
        <Service />
        <Footer />
      </div>
    </>
  );
}