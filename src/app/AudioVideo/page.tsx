import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AudioVideo from '../Components/AudioVideo';
 
export const metadata = {
    title: 'Audio Video | Digitallink Technology',
    description: 'Learn about Audio Video.',
    keywords: 'Audio Video, about us, mission, vision, team , Digitallink saudi,  digital link,',
    openGraph: {
      title: 'Audio Video | digitallink Technology',
    description: 'Learn about Audio Video.',
      url: 'https://digitallink-sa.com/audio-video/',
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
 const AudioVideopage = () => {
    return (
        <div>
            <NavBar />
            <AudioVideo />
            <Footer />
        </div>
    )
 }

 export default AudioVideopage;
