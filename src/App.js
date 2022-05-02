import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { HStack, Link, Flex, Box, Text, Container } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import Navbar from './components/Navbar';
import Blob from './components/Blob';
import HeyThere from './svgs/HeyThere.svg';
import { FaDiscord } from 'react-icons/fa';
import { DiGithubAlt } from 'react-icons/di';
import { SiCodechef } from 'react-icons/si';
import { SiCodeforces } from 'react-icons/si';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Icon, IconButton } from '@chakra-ui/react';

/*
<Box pos="relative" w="fit-content" h={50} bg="green">
  <Box pos="absolute">
    <Image
      src={cat}
      width="192px"
      pos="absolute"
      borderRadius="full"
      top={10}
      right={20}
    />
    <Blob />
  </Box>
</Box>
*/

const cat = require('./my-octocat.png');

function App() {
  const [isSmallerScreen] = useMediaQuery('(min-width:1500px)');
  return (
    <Box h="100vh" w="100%">
      <Navbar />
      <Container minW="55%">
        <Flex
          direction={isSmallerScreen ? 'row' : 'column-reverse'}
          p={isSmallerScreen ? '16' : '0'}
          align="center"
          justify={isSmallerScreen ? 'center' : 'space-between'}
          h="100vh"
          w="100%"
        >
          <Flex
            align="flex-start"
            justify="center"
            direction="column"
            mt={isSmallerScreen ? '0' : 32}
          >
            <Image src={HeyThere} width="100%" height="100%" />
            <Text fontSize="3xl" fontFamily={'Luckiest Guy'} lineHeight="1.2">
              Call Me the KidCoderT. <br />
              And Welcome to my <br />
              Website
            </Text>
            <Button mt={2} variant="primary" rightIcon={<FaDiscord />}>
              Contact Me
            </Button>
            <HStack mt={4}>
              <IconButton
                variant="outline"
                as={Link}
                href="https://github.com/KidCoderT"
                isExternal
                icon={<Icon as={DiGithubAlt} w={8} h={8} />}
              />
              <IconButton
                variant="outline"
                as={Link}
                href="https://www.linkedin.com/in/tejas-sunil-bb18611b4/"
                isExternal
                icon={<Icon as={AiOutlineLinkedin} w={6} h={6} />}
              />
              <IconButton
                variant="outline"
                as={Link}
                href="https://www.codechef.com/users/kidcodert"
                isExternal
                icon={<Icon as={SiCodechef} w={5} h={5} />}
              />
              <IconButton
                variant="outline"
                as={Link}
                href="https://codeforces.com/profile/KidCoderT"
                isExternal
                icon={<Icon as={SiCodeforces} w={5} h={5} />}
              />
            </HStack>
          </Flex>
          <Box mb={8}>
            <Image
              src={cat}
              width="192px"
              pos="absolute"
              borderRadius="full"
              ml={10}
              mt={5}
            />
            <Blob />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
