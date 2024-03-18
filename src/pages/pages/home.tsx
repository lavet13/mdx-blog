import { FC } from 'react';
import { Center, Heading, SimpleGrid } from '@chakra-ui/react';
import CyberButton from '../../components/cyber-button';
import { PAGES } from '..';
import { usePosts } from '../../features/posts/queries';
import Section from '../../components/section';
import Blockquote from '../../components/blockquote';
import Post from '../../components/post';

const Home: FC = () => {
  const path = PAGES.homePage['path'];
  const { data, error, isPending, isError } = usePosts();

  if(isPending) {
    return <span>Loading...</span>
  }

  if(isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <Heading textAlign={'center'}>Welcome to home page! Path: {path}</Heading>
      <Center mt={2}>
        <CyberButton size={'lg'}>button</CyberButton>
      </Center>

      <Section>
        {/* <Blockquote variant='outline'>HELP?</Blockquote> */}
        <SimpleGrid minChildWidth="270px" spacing={'40px'}>
          {data.posts.map(post => <Post key={post.id} post={post} />)}
        </SimpleGrid>
      </Section>

      <Section variant='both'>
        <Blockquote variant='outline-inverse'>HELP?</Blockquote>
      </Section>

      <Section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tellus in metus
        vulputate eu scelerisque felis imperdiet. Eget egestas purus viverra
        accumsan in nisl nisi. Rutrum tellus pellentesque eu tincidunt.
        Condimentum lacinia quis vel eros donec. Pharetra et ultrices neque
        ornare. Tortor at auctor urna nunc id cursus metus. Sed tempus urna et
        pharetra pharetra massa massa. Amet purus gravida quis blandit turpis
        cursus in hac habitasse. Facilisis sed odio morbi quis commodo odio
        aenean sed adipiscing. Maecenas ultricies mi eget mauris pharetra et
        ultrices. Sit amet massa vitae tortor condimentum lacinia quis vel. A
        condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus
        nisl tincidunt eget nullam. Sem nulla pharetra diam sit amet nisl
        suscipit. Pellentesque diam volutpat commodo sed. Vulputate ut pharetra
        sit amet aliquam id diam maecenas ultricies. Pellentesque nec nam
        aliquam sem et tortor consequat. Scelerisque viverra mauris in aliquam
        sem fringilla ut morbi. Lacus vel facilisis volutpat est velit egestas
        dui id ornare. Enim diam vulputate ut pharetra. Volutpat ac tincidunt
        vitae semper quis lectus nulla at. Posuere lorem ipsum dolor sit amet
        consectetur adipiscing elit. At imperdiet dui accumsan sit amet nulla
        facilisi. Pellentesque habitant morbi tristique senectus et. Fringilla
        urna porttitor rhoncus dolor purus non enim. Varius quam quisque id diam
        vel quam elementum pulvinar etiam. Laoreet id donec ultrices tincidunt
        arcu non sodales neque. Tristique senectus et netus et malesuada fames
        ac turpis. Felis donec et odio pellentesque diam volutpat commodo.
        Feugiat vivamus at augue eget arcu. Nullam non nisi est sit amet
        vulputate. Nunc sed blandit libero volutpat sed cras ornare. Tempus quam
        pellentesque nec nam aliquam sem et. Porttitor rhoncus dolor purus non
        enim praesent elementum facilisis. Ut tortor pretium viverra suspendisse
        potenti nullam ac tortor vitae. Suspendisse in est ante in nibh mauris
        cursus mattis molestie. Tortor consequat id porta nibh. At consectetur
        lorem donec massa sapien faucibus. Dolor purus non enim praesent
        elementum facilisis leo. Diam quis enim lobortis scelerisque fermentum
        dui faucibus in. Sagittis eu volutpat odio facilisis mauris sit amet
        massa vitae. Faucibus ornare suspendisse sed nisi. Nulla facilisi cras
        fermentum odio. Leo a diam sollicitudin tempor id eu nisl nunc.
        Elementum nibh tellus molestie nunc non blandit. Sed risus pretium quam
        vulputate dignissim suspendisse in est ante. Urna duis convallis
        convallis tellus. Sed augue lacus viverra vitae congue. Lorem sed risus
        ultricies tristique nulla aliquet enim tortor. Sapien pellentesque
        habitant morbi tristique senectus et netus et. Maecenas accumsan lacus
        vel facilisis volutpat est velit. Gravida cum sociis natoque penatibus
        et. Ut porttitor leo a diam sollicitudin tempor id eu. Id nibh tortor id
        aliquet lectus proin nibh nisl condimentum. Habitant morbi tristique
        senectus et netus et malesuada fames. Placerat duis ultricies lacus sed.
        Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nunc vel
        risus commodo viverra maecenas. Sapien pellentesque habitant morbi
        tristique senectus et netus. Purus non enim praesent elementum facilisis
        leo. Tempus egestas sed sed risus pretium quam. Amet purus gravida quis
        blandit turpis cursus in hac habitasse. In est ante in nibh. Felis donec
        et odio pellentesque diam volutpat commodo sed egestas. Viverra orci
        sagittis eu volutpat odio facilisis. Fermentum odio eu feugiat pretium.
        Sed enim ut sem viverra aliquet eget sit amet. Pretium nibh ipsum
        consequat nisl vel pretium. Id donec ultrices tincidunt arcu non.
        Pellentesque habitant morbi tristique senectus et netus. Quam elementum
        pulvinar etiam non quam. Suscipit adipiscing bibendum est ultricies
        integer quis auctor elit. Fermentum odio eu feugiat pretium. Et molestie
        ac feugiat sed lectus. Vitae sapien pellentesque habitant morbi
        tristique senectus et. Volutpat odio facilisis mauris sit amet. Odio
        tempor orci dapibus ultrices in. Sollicitudin aliquam ultrices sagittis
        orci a. At quis risus sed vulputate odio ut. Praesent elementum
        facilisis leo vel fringilla est ullamcorper eget nulla. Praesent
        tristique magna sit amet purus. Molestie a iaculis at erat pellentesque.
        Massa id neque aliquam vestibulum morbi. Arcu vitae elementum curabitur
        vitae nunc. Montes nascetur ridiculus mus mauris vitae ultricies. Nunc
        mattis enim ut tellus elementum sagittis vitae. Posuere morbi leo urna
        molestie at elementum eu facilisis sed. Eu scelerisque felis imperdiet
        proin fermentum leo vel orci porta. Id interdum velit laoreet id donec.
        Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.
        Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
        Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Eget mauris
        pharetra et ultrices neque ornare aenean. Aliquet nibh praesent
        tristique magna sit amet purus gravida. Amet mauris commodo quis
        imperdiet massa tincidunt nunc. Faucibus pulvinar elementum integer enim
        neque volutpat ac. Magnis dis parturient montes nascetur. Faucibus nisl
        tincidunt eget nullam non nisi. Leo vel fringilla est ullamcorper eget
        nulla facilisi etiam. Rutrum quisque non tellus orci ac auctor. Sociis
        natoque penatibus et magnis dis parturient. Magna ac placerat vestibulum
        lectus mauris ultrices eros in cursus. Quam lacus suspendisse faucibus
        interdum posuere lorem ipsum dolor sit.
      </Section>
    </>
  );
};

export default Home;
