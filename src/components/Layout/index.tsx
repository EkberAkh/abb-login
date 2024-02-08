"use client";

import { Box, Flex, HStack, VStack, Text, Image } from "@chakra-ui/react";
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
      >
        
        <Header />
        <Flex w="100%">{children}</Flex>
        <Footer />
        gap={0}
      </VStack>
      <Box
        flex={{ base: "0", lg: "0", xl: "7 1 0" }}
        display={{ base: "none", lg: "none", xl: "flex" }}
        minH="100vh"
        justifyContent="stretch"
        bg="blue.600"
        position="relative"
      >
        <Text
        height="100%"
          color="white"
          fontSize="40px"
          position="relative"
          top="46px"
          left="40px"
        >
          ABB business tətbiqi ilə{" "}
          <span style={{ display: "block", fontWeight: "bold" }}>
            işinizi irəli aparın!
          </span>
        </Text>
        <Image
          position="absolute"
          left="40px"
          top="177px"
          alt="QR1"
          src="/login/images/G2roup 2.svg"
        />
        <Image
          position="absolute"
          left="170px"
          top="177px"
          alt="QR2"
          src="/login/images/Group 121.svg"
        />

        <Image
          position="absolute"
          right="80px"
          bottom="5px"
          src="/login/images/ABB_2business_phone2 1.svg"
        ></Image>
      </Box>
    </HStack>
  );
};
