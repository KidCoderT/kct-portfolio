import React from 'react';
import {
  Box,
  Show,
  Link,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Container,
  Stack,
  useColorModeValue,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';
import ThemeToggleButton from './ThemeToggleButton';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const navbarBg = useColorModeValue('#DDDDDD', '#303030');

  return (
    <Box px={5} as="nav" py={2} pos="fixed" w="100%" zIndex={50}>
      <Container
        display="flex"
        p={2}
        maxW="1000px"
        wrap="wrap"
        align="center"
        justify="space-between"
        maxH="min-content"
      >
        <Flex
          p={2}
          align="center"
          justify="center"
          borderRadius="md"
          overflow="hidden"
          bg={navbarBg}
        >
          <svg
            width="99.2"
            height="32"
            viewBox="0 0 124 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.912 31.128H39.312V39H26.208L19.008 24.12L16.8 25.944V31.128H19.104V39H0.96V31.128H3.36V9.528H0.96V1.656H19.104V9.528H16.8V15.864L24.24 9.528H21.216V1.656H39.072V9.528H36.672L28.656 16.152L36.912 31.128ZM65.169 39.672C59.121 39.672 54.449 38.136 51.153 35.064C47.889 31.992 46.257 27.08 46.257 20.328C46.257 7.432 52.529 0.983997 65.073 0.983997C68.113 0.983997 70.929 1.352 73.521 2.088C76.145 2.824 78.097 3.64 79.377 4.536V16.536H67.857V13.08C67.857 11.864 67.585 10.968 67.041 10.392C66.497 9.816 65.681 9.528 64.593 9.528C63.505 9.528 62.689 9.816 62.145 10.392C61.601 10.968 61.329 11.864 61.329 13.08V27.576C61.329 28.792 61.601 29.688 62.145 30.264C62.689 30.84 63.505 31.128 64.593 31.128C65.681 31.128 66.497 30.84 67.041 30.264C67.585 29.688 67.857 28.792 67.857 27.576V23.688H79.377V36.12C78.065 37.016 76.113 37.832 73.521 38.568C70.961 39.304 68.177 39.672 65.169 39.672ZM123.954 13.272H115.698V9.528H112.626V31.128H115.986V39H95.8256V31.128H99.1856V9.528H96.1136V13.272H87.8576V1.656H123.954V13.272Z"
              fill="url(#paint0_linear_3_53)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_53"
                x1="105"
                y1="54.9998"
                x2="7.00018"
                y2="-13.0003"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.425" stopColor="#FFC600" />
                <stop offset="0.4251" stopColor="#5800FF" />
              </linearGradient>
            </defs>
          </svg>
        </Flex>

        <Spacer />

        <Show breakpoint="(min-width: 701px)">
          <Stack
            py={2}
            px={5}
            spacing={5}
            direction="row"
            borderRadius="md"
            pos="relative"
            bg={navbarBg}
            display="flex"
            align="center"
            justify="center"
            minW="50%"
          >
            <Link fontFamily="Pacifico" fontSize={25}>
              Home
            </Link>
            <Spacer />
            <Text fontFamily="Pacifico" fontSize={15}>
              More About Me comming soon...
            </Text>
          </Stack>
        </Show>

        <Spacer />

        <Flex
          p={2}
          align="center"
          justify="center"
          borderRadius="md"
          overflow="hidden"
          bg={navbarBg}
          minW="90px "
        >
          <Show breakpoint="(max-width: 700px)">
            <Box
              borderRadius="md"
              mr={2}
              display={{ base: 'inline-block', md: 'none' }}
            >
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={Link}>Home</MenuItem>
                  <MenuItem as={Link}>Technologies</MenuItem>
                  <MenuItem as={Link}>About Me</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Show>

          <ThemeToggleButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
