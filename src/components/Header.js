import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  CloseButton,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useViewportScroll } from "framer-motion";

import {
  GoUnmute,
  GoMute
} from "react-icons/go";

const MuteIcon = ({ isMuted }) => {
  return isMuted ? <GoMute /> : <GoUnmute />;
};

export const Header = ({
  isMuted,
  toggleSound,
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const sirenText = isMuted ? "OFF" : "ON";
  
  return (
    <>
      <chakra.header
        ref={ref}
        shadow="md"
        transition="box-shadow 0.2s"
        pos="fixed"
        top="0"
        zIndex="modal"
        bg="white"
        left="0"
        right="0"
        borderTop="0px solid"
        borderTopColor="brand.400"
        w="full"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/" passHref>
                <Box cursor="pointer">
                  <chakra.span
                    fontSize="1.3rem"
                    fontFamily="heading"
                    fontWeight="bold"
                    style={{ float: "right" }}
                    display="block"
                    color="gray.800"
                  >
                    Is Ukraine being Bombed right now?
                  </chakra.span>
                </Box>
              </NextLink>
            </Flex>

            <Flex
              justify="flex-end"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Turn siren ${sirenText}`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                mr="5"
                onClick={toggleSound}
                icon={<MuteIcon isMuted={isMuted} />}
              />
              <img id="dimg_11" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAFVBMVEX+1QABW7sAW7sAUcGWnmj/2wABXLkr7EQMAAAAgUlEQVR4nO3SyQ3DAAgAQZyr/5JTgy15I6IZvjzQijlWmuNxYu5bPrk+v+52jdoltUtql9QuqV1Su6R2Se2S2iW1S2qX1C6pXVK7pHZJ7ZLaJbVLapfWnu1JOmqX1C6pXVK7pHZJ7ZLapfmsNM+V5rXSvFcaAAAAAAAAAAAAAP7XFzzwP8UnEJ9SAAAAAElFTkSuQmCC" className="rISBZc M4dUYb" height="40" width="60" alt="Ukraine" data-atf="1" data-frt="0"></img>
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </>
  );
};
