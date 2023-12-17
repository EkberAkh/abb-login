import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <HStack minH="100vh" gap={0}>
      <VStack
        flex={{ base: "1", lg: "1", xl: "5 1 0" }}
        minH="100vh"
        justifyContent="space-between"
       gap={0}
      >
        <Header />
        <Flex width="100%" >{children}</Flex>
        <Footer />
      </VStack>
      <Box
        flex={{ base: "0", lg: "0", xl: "7 1 0" }}
        display={{ base: "none", lg: "none", xl: "flex" }}
        minH="100vh"
        justifyContent="stretch"
        bg="blue.400"
      >
        Right Side
      </Box>
    </HStack>
  );
};
