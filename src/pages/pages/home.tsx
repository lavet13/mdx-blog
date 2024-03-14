import { FC } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import CyberButton from '../../components/cyber-button';

const Home: FC = () => {
  return (
    <>
      <Heading textAlign={'center'}>Welcome to home page!</Heading>
      <Center mt={2}>
        <CyberButton size={'lg'}>button</CyberButton>
      </Center>
    </>
  );
};

export default Home;
