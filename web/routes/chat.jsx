import { Box, Flex, Heading } from "@chakra-ui/react";
import { useUser } from "@gadgetinc/react";
import CurrentChat from "../components/CurrentChat";
import LeftNav from "../components/LeftNav";
import { api } from "../api";

export default function () {
  const user = useUser(api);

  return user ? (
    <Flex height="100vh" width="100vw" overflow="hidden" alignSelf="stretch">
      <LeftNav user={user} />
      <Flex direction="column" flex="1">
        <Box
          borderBottomWidth="1px"
          // borderBottomColor="gray.100"
        >
          <Flex py={4} mx={16} justifyContent="center">
            <Heading as="h1" size="md">
              Train.Ai
            </Heading>
          </Flex>
        </Box>
        <CurrentChat user={user} />
      </Flex>
    </Flex>
  ) : null;
}
