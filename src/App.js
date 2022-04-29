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
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <Box h="100vh" w="100%">
      <Navbar />
      <Box minW="80%" p={5} h="100vh">
        <Container>
          <Flex
            direction={isNotSmallerScreen ? 'row' : 'column'}
            p={isNotSmallerScreen ? '16' : '0'}
            align="center"
            justify="center"
          >
            <Box mt={isNotSmallerScreen ? '0' : 32}>
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
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
