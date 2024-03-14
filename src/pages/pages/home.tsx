import { FC } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import CyberButton from '../../components/cyber-button';
import { PAGES } from '..';

const Home: FC = () => {
  const path = PAGES.homePage['path'];

  return (
    <>
      <Heading textAlign={'center'}>Welcome to home page! Path: {path}</Heading>
      <Center mt={2}>
        <CyberButton size={'lg'}>button</CyberButton>
      </Center>
    </>
  );
};

export default Home;
