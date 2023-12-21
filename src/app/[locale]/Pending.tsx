import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Corrected import for useRouter
import { Box, Container, Heading, Progress, Text, Button, Image, Stack, CloseButton, VStack,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";

interface PendingProps {
  sid: string | null;
  verifCode: string | null;
}

const Pending: React.FC<PendingProps> = ({ sid,verifCode }) => {
  const [progressValue, setProgressValue] = useState(0);
  const router = useRouter();
  const currentPath = usePathname();
  const t = useTranslations() || "";

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(
          `https://mock-api-login-abb.vercel.app/auth/v1/auth/check-status/asanimza?sid=${sid}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        router.push(`${currentPath}/organizations`);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    checkStatus();
  }, [sid, router]);


  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevValue) => Math.min(prevValue + 100 / 1000, 100));
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const clickCloseOrganizationHandler = () => {
    router.back();
  };

  const clickHandler = () => {
    router.back();
  };

  return (
    <Stack position="relative">
      <CloseButton
        onClick={() => clickCloseOrganizationHandler}
        position="absolute"
        right="24px"
        top="24px"
        background="#EDF2F7"
        _hover={{ backgroundColor: "gray.200" }}
      />
      <Container
        as="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        height="100vh"
        gap="16px"
        maxW="500px"
        px="24px"
      >
        <VStack>
          <Image src="./images/Loading.png" alt="logo" />
        </VStack>
        <Heading
          textAlign="center"
          color="#000"
          fontSize="24px"
          fontWeight="600"
          lineHeight="30px"
        >
          {t("login.asanImzaTitle")}
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="rgba(0, 0, 0, 0.50)"
        >
          {t("login.verificationMessage")}
        </Text>
        <Box border="1px solid #E4E4E4" borderRadius="12px">
          <Box as="div" p="24px" textAlign="center">
            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              mb="4px"
            >
              {t("login.code")}
            </Text>
            <Text
              color="#000"
              fontSize="24px"
              fontWeight="600"
              lineHeight="32px"
            >
              {verifCode}
            </Text>
          </Box>
          <Progress value={progressValue} borderRadius="full" />
        </Box>
        <Button
          colorScheme="white"
          color="black"
          w="100%"
          onClick={clickHandler}
          _hover={{ backgroundColor: "gray.100" }}
        >
          {t("login.cancel")}
        </Button>
      </Container>
    </Stack>
  );
};

export default Pending;
