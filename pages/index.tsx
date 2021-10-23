import { VStack } from '@chakra-ui/layout';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';

const Home = () => {
  return (
    <>
      <Navbar />
      <VStack>
        <Header />
        <Profile />
        <Footer />
      </VStack>
    </>
  );
};

export default Home;
