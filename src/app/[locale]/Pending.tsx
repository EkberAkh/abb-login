import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import for useRouter
import {
  Box,
  Container,
  Heading,
  Progress,
  Text,
  Button,
  Image,
  Stack,
  CloseButton,
  VStack,
} from "@chakra-ui/react";

interface PendingProps {
  sid: string | null;
  verifCode: string | null;
}

const Pending: React.FC<PendingProps> = ({ sid,verifCode }) => {
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds countdown
  const [progress, setProgress] = useState(0); // Progress bar value

  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Countdown timer logic
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        setProgress((prevProgress) => prevProgress + 10); 
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      // Handle completion of countdown if needed
    }
  }, [timeLeft]);

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

        // Redirect to /organizations if the response is OK
        router.push("/az/organizations");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    checkStatus();
  }, [sid, router]);

  const rejectHandler = () => {
    router.back();
  };

  return (
    <Stack position="relative">
      <CloseButton
        position="absolute"
        right="24px"
        top="24px"
        background="#EDF2F7"
        _hover={{ backgroundColor: "gray.200" }}
        onClick={rejectHandler}
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
          ASAN İmza təsdiqi
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="rgba(0, 0, 0, 0.50)"
        >
          Telefonunuza daxil olan kodu aşağıdakı kodu ilə eyni olmasını müqayisə
          edin və ASAN PIN1 ilə təsdiqləyin.
        </Text>
        <Box border="1px solid #E4E4E4" borderRadius="12px">
          <Progress
            color="#2058BB"
            size="xs"
            position="absolute"
            left="0"
            right="0"
            bottom="0"
            height="7px"
            value={progress}
          />
          <Box as="div" p="24px" textAlign="center">
            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              mb="4px"
            >
              Yoxlama kodu
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
        </Box>
        <Button
          onClick={rejectHandler}
          colorScheme="white"
          color="black"
          w="100%"
          _hover={{ backgroundColor: "gray.100" }}
        >
          İmtina et
        </Button>
      </Container>
    </Stack>
  );
};

export default Pending;
