import React from 'react';
import { useRouter } from "next/navigation";
import useSWR from 'swr';
import { Box, Container, Heading, Progress, Text, Button, Image, Stack, CloseButton, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

interface PendingProps {
  sid: string | null;
  verifCode: string | null;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Pending: React.FC<PendingProps> = ({ sid, verifCode }) => {
  const [progressValue, setProgressValue] = React.useState(0);
  const router = useRouter();
  const currentPath = usePathname();
  const t = useTranslations() || "";

  const { data, error } = useSWR(sid ? `https://mock-api-login-abb.vercel.app/auth/v1/auth/check-status/asanimza?sid=${sid}` : null, fetcher, { refreshInterval: 3000 });

  React.useEffect(() => {
    if (data) {
      router.push(`${currentPath}/organizations`);
    }
  }, [data, currentPath, router]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevValue) => Math.min(prevValue + 100 / 1000, 100));
    }, 10);
    return () => clearInterval(timer);
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
        onClick={clickCloseOrganizationHandler}
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
      {error && <div>Failed to load</div>}
    </Stack>
  );
};

export default Pending;
