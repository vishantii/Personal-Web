import { VStack } from '@chakra-ui/layout';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';
import AppHeader from './AppHeader';

const Home = () => {
  return (
    <>
      <AppHeader title="Home" pageDesc="Welcome" />
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
