import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Unv from "../Components/Unv";
export const metadata = {
  title: 'Unv | Digitallink Technology',
  description: 'Learn about Unv.',
  keywords: 'Unv, about us, mission, vision, team , Digitallink saudi,  digital link,',
};
export default function unvPage() {
  return (
    <div>
      <NavBar />
      <Unv />
      <Footer />
    </div>
  );
}


