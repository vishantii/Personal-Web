import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiAngularSimple, DiAndroid } from "react-icons/di";
import { SiReact, SiChakraui, SiNextdotjs, SiJavascript } from "react-icons/si";
import { Main } from "./Motion/MotionStack";
import { Stack } from "@chakra-ui/react";
import { MainProfile } from "./Motion/MotionStackProfile";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <MainProfile>
      <Stack spacing={3} pt={6}>
        {" "}
        <Box alignSelf="center">
          {" "}
          <Text textAlign="center" fontWeight="bold" fontSize="2xl">
            A Developer, specialized in Web App development.{" "}
          </Text>{" "}
        </Box>{" "}
        <Heading
          textAlign="center"
          alignSelf="center"
          fontWeight="bold"
          fontSize="3xl"
          bgGradient="linear(to-r, cyan.400, pink.500, pink.600)"
          bgClip="text"
        >
          Here&apos;s Some Featured Projects{" "}
        </Heading>
        <SimpleGrid alignSelf="center" columns={[1, null, 4]} spacing={3}>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="pink.300"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open("https://github.com/vishantii/ThesisAppClient")
              }
            >
              <Icon color="black" p="4" as={SiNextdotjs} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                {"Garasi Jogja (Next JS)"}
              </Text>
            </Flex>
          </Flex>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="cyan.300"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open("https://github.com/kejauhan/kejauhansgram")
              }
            >
              <Icon color="black" p="4" as={SiJavascript} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                {"Garasi Jogja (Express JS)"}
              </Text>
            </Flex>
          </Flex>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="teal.300"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open(
                  "https://github.com/vishantii/UTS_MobileApplication/tree/main/UTS1_37928"
                )
              }
            >
              <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Android Apps
              </Text>
            </Flex>
          </Flex>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="purple.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open("https://github.com/vishantii/Store-NEXT")
              }
            >
              <Icon color="black" p="4" as={SiNextdotjs} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Next Js Apps
              </Text>
            </Flex>
          </Flex>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="purple.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open("https://github.com/vishantii/Store-Express")
              }
            >
              <Icon color="black" p="4" as={SiJavascript} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Next Js Server
              </Text>
            </Flex>
          </Flex>
          <Flex direction={["row", "column"]} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="green.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400" }}
              onClick={() =>
                window.open("https://github.com/vishantii/FoodMarket")
              }
            >
              <Icon color="black" p="4" as={SiJavascript} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                {"Food Market (React Native)"}
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Stack>
    </MainProfile>
  );
}

export default Profile;
