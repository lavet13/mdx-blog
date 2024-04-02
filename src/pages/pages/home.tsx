import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  HStack,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { Waypoint } from 'react-waypoint';
// import CyberButton from '../../components/cyber-button';
// import { PAGES } from '..';
import { useInfinitePosts, usePosts } from '../../features/posts/queries';

import Section from '../../components/section';
import Blockquote from '../../components/blockquote';
import Post from '../../components/post';
import Button from '../../components/regular-button';

import { useSearchParams } from 'react-router-dom';
import { parseIntSafe } from '../../utils/helpers/parse-int-safe';

const Home: FC = () => {
  // const path = PAGES.homePage['path'];

  const [searchParams, setSearchParams] = useSearchParams();
  const before = searchParams.get('before') ?? null;
  const after = searchParams.get('after') ?? null;

  const { data, error, isError, isPending, isFetching, isPlaceholderData } =
    usePosts({
      take: 3,
      after: parseIntSafe(after!),
      before: parseIntSafe(before!),
    });

  const {
    data: infPosts,
    error: infiniteError,
    isError: isInfiniteError,
    fetchNextPage: fetchNextInfinitePage,
    hasNextPage: hasNextInfinitePage,
    isPending: isPendingInfinite,
    isFetching: isFetchingInfinite,
    isFetchingNextPage,
  } = useInfinitePosts({ take: 2 });

  useEffect(() => {
    if (data?.posts.edges.length === 0) {
      setSearchParams(params => {
        const query = new URLSearchParams(params.toString());

        query.delete('after');
        query.delete('before');

        return query;
      });
    }
  }, [data]);

  const isFetchingBackwards = !!(before && isFetching);
  const isFetchingForwards = !!(after && isFetching);

  const fetchNextPage = () => {
    if (!isPlaceholderData && data?.posts.pageInfo.hasNextPage) {
      setSearchParams(params => {
        const query = new URLSearchParams(params.toString());

        query.set('after', `${data.posts.pageInfo.endCursor}`);
        query.delete('before');

        return query;
      });
    }
  };

  const fetchPreviousPage = () => {
    if (!isPlaceholderData && data?.posts.pageInfo.hasPreviousPage) {
      setSearchParams(params => {
        const query = new URLSearchParams(params.toString());

        query.set('before', `${data.posts.pageInfo.startCursor}`);
        query.delete('after');

        return query;
      });
    }
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isPendingInfinite) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isInfiniteError) {
    return <span>Error: {infiniteError.message}</span>;
  }


  return (
    <Box>
      <Section>
        <Container maxW={'container.xl'}>
          <Grid
            templateColumns={'repeat(auto-fill, minmax(15rem, 1fr))'}
            gap={'40px'}
          >
            {data.posts.edges.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </Grid>
          <HStack pt={3} justify={'center'} spacing={2}>
            <Button
              variant={'regular'}
              isLoading={isFetchingBackwards}
              style={{
                cursor: isFetchingBackwards
                  ? 'not-allowed'
                  : !data.posts.pageInfo.hasPreviousPage
                  ? 'not-allowed'
                  : 'pointer',
              }}
              onClick={fetchPreviousPage}
              disabled={
                isPlaceholderData || !data.posts.pageInfo.hasPreviousPage
              }
            >
              Previous Page
            </Button>
            <Button
              isLoading={isFetchingForwards}
              style={{
                cursor: isFetchingForwards
                  ? 'not-allowed'
                  : !data.posts.pageInfo.hasNextPage
                  ? 'not-allowed'
                  : 'pointer',
              }}
              onClick={fetchNextPage}
              disabled={isPlaceholderData || !data.posts.pageInfo.hasNextPage}
            >
              Next Page
            </Button>
          </HStack>
        </Container>
      </Section>

      <Section variant='bothBlack'>
        <Container maxW={'container.xl'}>
          <Blockquote variant='outline-inverse'>HELP?</Blockquote>
        </Container>
        <Button variant="black">CHEGO</Button>
      </Section>

      <Section variant='both'>
        <Container maxW={'container.xl'}>
          <Grid
            templateColumns={'repeat(auto-fill, minmax(15rem, 1fr))'}
            gap={'40px'}
          >
            {infPosts.pages.map((group, i, arrGroup) => (
              <React.Fragment key={i}>
                {group.posts.edges.map(post => (
                  <Post key={post.id} post={post} />
                ))}
                {i === arrGroup.length - 1 && (
                  <Waypoint
                    onEnter={() =>
                      !isFetchingInfinite &&
                      hasNextInfinitePage &&
                      fetchNextInfinitePage()
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>
          {isFetchingNextPage && (
            <Center>
              <Spinner />
            </Center>
          )}

          {/* <Button */}
          {/*   onClick={() => */}
          {/*     !isFetchingInfinite && */}
          {/*     hasNextInfinitePage && */}
          {/*     fetchNextInfinitePage() */}
          {/*   } */}
          {/*   isLoading={isFetchingNextPage} */}
          {/*   style={{ */}
          {/*     cursor: */}
          {/*       !hasNextInfinitePage || isFetchingNextPage */}
          {/*         ? 'not-allowed' */}
          {/*         : 'pointer', */}
          {/*   }} */}
          {/*   disabled={!hasNextInfinitePage || isFetchingNextPage} */}
          {/* > */}
          {/*   {hasNextInfinitePage ? 'Load more' : 'Nothing more to load'} */}
          {/* </Button> */}

          {/* Background fetching*/}
          {/* <div>{isFetchingInfinite ? 'Refetching...' : null}</div> */}
        </Container>
      </Section>

      <Section variant='black'>
        <Container maxW={'container.xl'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
          metus vulputate eu scelerisque felis imperdiet. Eget egestas purus
          viverra accumsan in nisl nisi. Rutrum tellus pellentesque eu
          tincidunt. Condimentum lacinia quis vel eros donec. Pharetra et
          ultrices neque ornare. Tortor at auctor urna nunc id cursus metus. Sed
          tempus urna et pharetra pharetra massa massa. Amet purus gravida quis
          blandit turpis cursus in hac habitasse. Facilisis sed odio morbi quis
          commodo odio aenean sed adipiscing. Maecenas ultricies mi eget mauris
          pharetra et ultrices. Sit amet massa vitae tortor condimentum lacinia
          quis vel. A condimentum vitae sapien pellentesque habitant morbi
          tristique. Faucibus nisl tincidunt eget nullam. Sem nulla pharetra
          diam sit amet nisl suscipit. Pellentesque diam volutpat commodo sed.
          Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies.
          Pellentesque nec nam aliquam sem et tortor consequat. Scelerisque
          viverra mauris in aliquam sem fringilla ut morbi. Lacus vel facilisis
          volutpat est velit egestas dui id ornare. Enim diam vulputate ut
          pharetra. Volutpat ac tincidunt vitae semper quis lectus nulla at.
          Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. At
          imperdiet dui accumsan sit amet nulla facilisi. Pellentesque habitant
          morbi tristique senectus et. Fringilla urna porttitor rhoncus dolor
          purus non enim. Varius quam quisque id diam vel quam elementum
          pulvinar etiam. Laoreet id donec ultrices tincidunt arcu non sodales
          neque. Tristique senectus et netus et malesuada fames ac turpis. Felis
          donec et odio pellentesque diam volutpat commodo. Feugiat vivamus at
          augue eget arcu. Nullam non nisi est sit amet vulputate. Nunc sed
          blandit libero volutpat sed cras ornare. Tempus quam pellentesque nec
          nam aliquam sem et. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Ut tortor pretium viverra suspendisse potenti
          nullam ac tortor vitae. Suspendisse in est ante in nibh mauris cursus
          mattis molestie. Tortor consequat id porta nibh. At consectetur lorem
          donec massa sapien faucibus. Dolor purus non enim praesent elementum
          facilisis leo. Diam quis enim lobortis scelerisque fermentum dui
          faucibus in. Sagittis eu volutpat odio facilisis mauris sit amet massa
          vitae. Faucibus ornare suspendisse sed nisi. Nulla facilisi cras
          fermentum odio. Leo a diam sollicitudin tempor id eu nisl nunc.
          Elementum nibh tellus molestie nunc non blandit. Sed risus pretium
          quam vulputate dignissim suspendisse in est ante. Urna duis convallis
          convallis tellus. Sed augue lacus viverra vitae congue. Lorem sed
          risus ultricies tristique nulla aliquet enim tortor. Sapien
          pellentesque habitant morbi tristique senectus et netus et. Maecenas
          accumsan lacus vel facilisis volutpat est velit. Gravida cum sociis
          natoque penatibus et. Ut porttitor leo a diam sollicitudin tempor id
          eu. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
          Habitant morbi tristique senectus et netus et malesuada fames.
          Placerat duis ultricies lacus sed. Viverra accumsan in nisl nisi
          scelerisque eu ultrices vitae. Nunc vel risus commodo viverra
          maecenas. Sapien pellentesque habitant morbi tristique senectus et
          netus. Purus non enim praesent elementum facilisis leo. Tempus egestas
          sed sed risus pretium quam. Amet purus gravida quis blandit turpis
          cursus in hac habitasse. In est ante in nibh. Felis donec et odio
          pellentesque diam volutpat commodo sed egestas. Viverra orci sagittis
          eu volutpat odio facilisis. Fermentum odio eu feugiat pretium. Sed
          enim ut sem viverra aliquet eget sit amet. Pretium nibh ipsum
          consequat nisl vel pretium. Id donec ultrices tincidunt arcu non.
          Pellentesque habitant morbi tristique senectus et netus. Quam
          elementum pulvinar etiam non quam. Suscipit adipiscing bibendum est
          ultricies integer quis auctor elit. Fermentum odio eu feugiat pretium.
          Et molestie ac feugiat sed lectus. Vitae sapien pellentesque habitant
          morbi tristique senectus et. Volutpat odio facilisis mauris sit amet.
          Odio tempor orci dapibus ultrices in. Sollicitudin aliquam ultrices
          sagittis orci a. At quis risus sed vulputate odio ut. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget nulla.
          Praesent tristique magna sit amet purus. Molestie a iaculis at erat
          pellentesque. Massa id neque aliquam vestibulum morbi. Arcu vitae
          elementum curabitur vitae nunc. Montes nascetur ridiculus mus mauris
          vitae ultricies. Nunc mattis enim ut tellus elementum sagittis vitae.
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Eu
          scelerisque felis imperdiet proin fermentum leo vel orci porta. Id
          interdum velit laoreet id donec. Urna et pharetra pharetra massa massa
          ultricies mi quis hendrerit. Feugiat scelerisque varius morbi enim
          nunc faucibus a pellentesque sit. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Eget mauris pharetra et ultrices neque
          ornare aenean. Aliquet nibh praesent tristique magna sit amet purus
          gravida. Amet mauris commodo quis imperdiet massa tincidunt nunc.
          Faucibus pulvinar elementum integer enim neque volutpat ac. Magnis dis
          parturient montes nascetur. Faucibus nisl tincidunt eget nullam non
          nisi. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Rutrum quisque non tellus orci ac auctor. Sociis natoque penatibus et
          magnis dis parturient. Magna ac placerat vestibulum lectus mauris
          ultrices eros in cursus. Quam lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit.
        </Container>
      </Section>
      <Section>
        <Container maxW={'container.xl'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
          metus vulputate eu scelerisque felis imperdiet. Eget egestas purus
          viverra accumsan in nisl nisi. Rutrum tellus pellentesque eu
          tincidunt. Condimentum lacinia quis vel eros donec. Pharetra et
          ultrices neque ornare. Tortor at auctor urna nunc id cursus metus. Sed
          tempus urna et pharetra pharetra massa massa. Amet purus gravida quis
          blandit turpis cursus in hac habitasse. Facilisis sed odio morbi quis
          commodo odio aenean sed adipiscing. Maecenas ultricies mi eget mauris
          pharetra et ultrices. Sit amet massa vitae tortor condimentum lacinia
          quis vel. A condimentum vitae sapien pellentesque habitant morbi
          tristique. Faucibus nisl tincidunt eget nullam. Sem nulla pharetra
          diam sit amet nisl suscipit. Pellentesque diam volutpat commodo sed.
          Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies.
          Pellentesque nec nam aliquam sem et tortor consequat. Scelerisque
          viverra mauris in aliquam sem fringilla ut morbi. Lacus vel facilisis
          volutpat est velit egestas dui id ornare. Enim diam vulputate ut
          pharetra. Volutpat ac tincidunt vitae semper quis lectus nulla at.
          Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. At
          imperdiet dui accumsan sit amet nulla facilisi. Pellentesque habitant
          morbi tristique senectus et. Fringilla urna porttitor rhoncus dolor
          purus non enim. Varius quam quisque id diam vel quam elementum
          pulvinar etiam. Laoreet id donec ultrices tincidunt arcu non sodales
          neque. Tristique senectus et netus et malesuada fames ac turpis. Felis
          donec et odio pellentesque diam volutpat commodo. Feugiat vivamus at
          augue eget arcu. Nullam non nisi est sit amet vulputate. Nunc sed
          blandit libero volutpat sed cras ornare. Tempus quam pellentesque nec
          nam aliquam sem et. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Ut tortor pretium viverra suspendisse potenti
          nullam ac tortor vitae. Suspendisse in est ante in nibh mauris cursus
          mattis molestie. Tortor consequat id porta nibh. At consectetur lorem
          donec massa sapien faucibus. Dolor purus non enim praesent elementum
          facilisis leo. Diam quis enim lobortis scelerisque fermentum dui
          faucibus in. Sagittis eu volutpat odio facilisis mauris sit amet massa
          vitae. Faucibus ornare suspendisse sed nisi. Nulla facilisi cras
          fermentum odio. Leo a diam sollicitudin tempor id eu nisl nunc.
          Elementum nibh tellus molestie nunc non blandit. Sed risus pretium
          quam vulputate dignissim suspendisse in est ante. Urna duis convallis
          convallis tellus. Sed augue lacus viverra vitae congue. Lorem sed
          risus ultricies tristique nulla aliquet enim tortor. Sapien
          pellentesque habitant morbi tristique senectus et netus et. Maecenas
          accumsan lacus vel facilisis volutpat est velit. Gravida cum sociis
          natoque penatibus et. Ut porttitor leo a diam sollicitudin tempor id
          eu. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
          Habitant morbi tristique senectus et netus et malesuada fames.
          Placerat duis ultricies lacus sed. Viverra accumsan in nisl nisi
          scelerisque eu ultrices vitae. Nunc vel risus commodo viverra
          maecenas. Sapien pellentesque habitant morbi tristique senectus et
          netus. Purus non enim praesent elementum facilisis leo. Tempus egestas
          sed sed risus pretium quam. Amet purus gravida quis blandit turpis
          cursus in hac habitasse. In est ante in nibh. Felis donec et odio
          pellentesque diam volutpat commodo sed egestas. Viverra orci sagittis
          eu volutpat odio facilisis. Fermentum odio eu feugiat pretium. Sed
          enim ut sem viverra aliquet eget sit amet. Pretium nibh ipsum
          consequat nisl vel pretium. Id donec ultrices tincidunt arcu non.
          Pellentesque habitant morbi tristique senectus et netus. Quam
          elementum pulvinar etiam non quam. Suscipit adipiscing bibendum est
          ultricies integer quis auctor elit. Fermentum odio eu feugiat pretium.
          Et molestie ac feugiat sed lectus. Vitae sapien pellentesque habitant
          morbi tristique senectus et. Volutpat odio facilisis mauris sit amet.
          Odio tempor orci dapibus ultrices in. Sollicitudin aliquam ultrices
          sagittis orci a. At quis risus sed vulputate odio ut. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget nulla.
          Praesent tristique magna sit amet purus. Molestie a iaculis at erat
          pellentesque. Massa id neque aliquam vestibulum morbi. Arcu vitae
          elementum curabitur vitae nunc. Montes nascetur ridiculus mus mauris
          vitae ultricies. Nunc mattis enim ut tellus elementum sagittis vitae.
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Eu
          scelerisque felis imperdiet proin fermentum leo vel orci porta. Id
          interdum velit laoreet id donec. Urna et pharetra pharetra massa massa
          ultricies mi quis hendrerit. Feugiat scelerisque varius morbi enim
          nunc faucibus a pellentesque sit. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Eget mauris pharetra et ultrices neque
          ornare aenean. Aliquet nibh praesent tristique magna sit amet purus
          gravida. Amet mauris commodo quis imperdiet massa tincidunt nunc.
          Faucibus pulvinar elementum integer enim neque volutpat ac. Magnis dis
          parturient montes nascetur. Faucibus nisl tincidunt eget nullam non
          nisi. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Rutrum quisque non tellus orci ac auctor. Sociis natoque penatibus et
          magnis dis parturient. Magna ac placerat vestibulum lectus mauris
          ultrices eros in cursus. Quam lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit.
        </Container>
      </Section>
      <Section variant='bothBlack'>
        <Container maxW={'container.xl'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
          metus vulputate eu scelerisque felis imperdiet. Eget egestas purus
          viverra accumsan in nisl nisi. Rutrum tellus pellentesque eu
          tincidunt. Condimentum lacinia quis vel eros donec. Pharetra et
          ultrices neque ornare. Tortor at auctor urna nunc id cursus metus. Sed
          tempus urna et pharetra pharetra massa massa. Amet purus gravida quis
          blandit turpis cursus in hac habitasse. Facilisis sed odio morbi quis
          commodo odio aenean sed adipiscing. Maecenas ultricies mi eget mauris
          pharetra et ultrices. Sit amet massa vitae tortor condimentum lacinia
          quis vel. A condimentum vitae sapien pellentesque habitant morbi
          tristique. Faucibus nisl tincidunt eget nullam. Sem nulla pharetra
          diam sit amet nisl suscipit. Pellentesque diam volutpat commodo sed.
          Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies.
          Pellentesque nec nam aliquam sem et tortor consequat. Scelerisque
          viverra mauris in aliquam sem fringilla ut morbi. Lacus vel facilisis
          volutpat est velit egestas dui id ornare. Enim diam vulputate ut
          pharetra. Volutpat ac tincidunt vitae semper quis lectus nulla at.
          Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. At
          imperdiet dui accumsan sit amet nulla facilisi. Pellentesque habitant
          morbi tristique senectus et. Fringilla urna porttitor rhoncus dolor
          purus non enim. Varius quam quisque id diam vel quam elementum
          pulvinar etiam. Laoreet id donec ultrices tincidunt arcu non sodales
          neque. Tristique senectus et netus et malesuada fames ac turpis. Felis
          donec et odio pellentesque diam volutpat commodo. Feugiat vivamus at
          augue eget arcu. Nullam non nisi est sit amet vulputate. Nunc sed
          blandit libero volutpat sed cras ornare. Tempus quam pellentesque nec
          nam aliquam sem et. Porttitor rhoncus dolor purus non enim praesent
          elementum facilisis. Ut tortor pretium viverra suspendisse potenti
          nullam ac tortor vitae. Suspendisse in est ante in nibh mauris cursus
          mattis molestie. Tortor consequat id porta nibh. At consectetur lorem
          donec massa sapien faucibus. Dolor purus non enim praesent elementum
          facilisis leo. Diam quis enim lobortis scelerisque fermentum dui
          faucibus in. Sagittis eu volutpat odio facilisis mauris sit amet massa
          vitae. Faucibus ornare suspendisse sed nisi. Nulla facilisi cras
          fermentum odio. Leo a diam sollicitudin tempor id eu nisl nunc.
          Elementum nibh tellus molestie nunc non blandit. Sed risus pretium
          quam vulputate dignissim suspendisse in est ante. Urna duis convallis
          convallis tellus. Sed augue lacus viverra vitae congue. Lorem sed
          risus ultricies tristique nulla aliquet enim tortor. Sapien
          pellentesque habitant morbi tristique senectus et netus et. Maecenas
          accumsan lacus vel facilisis volutpat est velit. Gravida cum sociis
          natoque penatibus et. Ut porttitor leo a diam sollicitudin tempor id
          eu. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
          Habitant morbi tristique senectus et netus et malesuada fames.
          Placerat duis ultricies lacus sed. Viverra accumsan in nisl nisi
          scelerisque eu ultrices vitae. Nunc vel risus commodo viverra
          maecenas. Sapien pellentesque habitant morbi tristique senectus et
          netus. Purus non enim praesent elementum facilisis leo. Tempus egestas
          sed sed risus pretium quam. Amet purus gravida quis blandit turpis
          cursus in hac habitasse. In est ante in nibh. Felis donec et odio
          pellentesque diam volutpat commodo sed egestas. Viverra orci sagittis
          eu volutpat odio facilisis. Fermentum odio eu feugiat pretium. Sed
          enim ut sem viverra aliquet eget sit amet. Pretium nibh ipsum
          consequat nisl vel pretium. Id donec ultrices tincidunt arcu non.
          Pellentesque habitant morbi tristique senectus et netus. Quam
          elementum pulvinar etiam non quam. Suscipit adipiscing bibendum est
          ultricies integer quis auctor elit. Fermentum odio eu feugiat pretium.
          Et molestie ac feugiat sed lectus. Vitae sapien pellentesque habitant
          morbi tristique senectus et. Volutpat odio facilisis mauris sit amet.
          Odio tempor orci dapibus ultrices in. Sollicitudin aliquam ultrices
          sagittis orci a. At quis risus sed vulputate odio ut. Praesent
          elementum facilisis leo vel fringilla est ullamcorper eget nulla.
          Praesent tristique magna sit amet purus. Molestie a iaculis at erat
          pellentesque. Massa id neque aliquam vestibulum morbi. Arcu vitae
          elementum curabitur vitae nunc. Montes nascetur ridiculus mus mauris
          vitae ultricies. Nunc mattis enim ut tellus elementum sagittis vitae.
          Posuere morbi leo urna molestie at elementum eu facilisis sed. Eu
          scelerisque felis imperdiet proin fermentum leo vel orci porta. Id
          interdum velit laoreet id donec. Urna et pharetra pharetra massa massa
          ultricies mi quis hendrerit. Feugiat scelerisque varius morbi enim
          nunc faucibus a pellentesque sit. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Eget mauris pharetra et ultrices neque
          ornare aenean. Aliquet nibh praesent tristique magna sit amet purus
          gravida. Amet mauris commodo quis imperdiet massa tincidunt nunc.
          Faucibus pulvinar elementum integer enim neque volutpat ac. Magnis dis
          parturient montes nascetur. Faucibus nisl tincidunt eget nullam non
          nisi. Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
          Rutrum quisque non tellus orci ac auctor. Sociis natoque penatibus et
          magnis dis parturient. Magna ac placerat vestibulum lectus mauris
          ultrices eros in cursus. Quam lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit.
        </Container>
      </Section>
    </Box>
  );
};

export default Home;
