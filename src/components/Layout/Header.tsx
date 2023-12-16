"use client";

import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const langs = ["az", "en", "ru"];

  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <HStack px="40px" bg="green.400" w="100%" justify="space-between">
      <Image alt="ABB Business Logo" src="/login/images/logo-business.svg" />
      <HStack spacing="16px">
        {langs.map((lang) => (
          <Link href={`/${lang}`} key={lang}>
            <Text
              id={`language-button-${lang}`}
              data-test-id={`language-button-${lang}`}
              color={
                currentPath.includes(`/${lang}`) ||
                (currentPath === "/" && lang === "az")
                  ? "gray.700"
                  : "gray.400"
              }
              fontWeight="semibold"
              fontSize="sm"
              lineHeight="6"
              textTransform="uppercase"
              cursor="pointer"
            >
              {lang}
            </Text>
          </Link>
        ))}
      </HStack>
    </HStack>
  );
};
