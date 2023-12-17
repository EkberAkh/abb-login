import { Layout } from "@/components/Layout";
import { HStack, Image, Link } from "@chakra-ui/react";

import React from "react";

const Footer = () => {
  return (
    <HStack
      bg="blue.100"
      w="100%"
      justify="space-between"
      align="center"
      h="87px"
      px="80px"
    >
      <Image src="/login/images/asan-logo.svg" />
      <Link fontSize="14px" color="gray.500" fontWeight="400">
        Köhnə İB-ə keçid
      </Link>
    </HStack>
  );
};

export default Footer;
