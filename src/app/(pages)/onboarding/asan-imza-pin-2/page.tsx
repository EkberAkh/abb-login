'use client'
import { Box,  Container, Heading, Progress, Text, Button, Image, CloseButton, Stack, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AsanImzaPinTwo = () => {

  const [progressValue, setProgressValue] = useState(100);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue(prevValue => Math.max(prevValue - (100 / 1000), 0));
    }, 10);
    setTimeout(() => {
      clearInterval(timer);
      router.push('/onboarding');
    }, 10000); 
  }, [router]);

  const clickHandler = () => {
    router.push('/onboarding');
  };

  return (
    <Stack position='relative'>
    <CloseButton onClick={clickHandler} position='absolute' right='24px' top='24px' background='#EDF2F7'  _hover={{ backgroundColor: 'gray.200'}} />
      <Container as='div' display='flex' justifyContent='center' flexDirection='column' height='100vh' gap='16px' maxW='500px' px='24px'>
          <VStack><Image src='/abb_logo.svg' alt='logo'/></VStack>
          <Heading textAlign='center' color="#000" fontSize='24px' fontWeight='600' lineHeight='30px'>ASAN İmza təsdiqi</Heading>
          <Text textAlign='center' fontSize='16px' fontWeight='400' lineHeight='24px' color='rgba(0, 0, 0, 0.50)'>Telefonunuza daxil olan kodu aşağıdakı kodu ilə eyni olmasını müqayisə edin və ASAN PIN2 ilə təsdiqləyin.</Text>
          <Box border='1px solid #E4E4E4' borderRadius='12px'>
            <Box as='div' p='24px' textAlign='center'>
              <Text color='rgba(0, 0, 0, 0.50)' fontSize='14px' fontWeight='500' lineHeight= '20px' mb='4px'>Yoxlama kodu</Text>
              <Text color='#000' fontSize='24px' fontWeight='600' lineHeight= '32px'>2123</Text>
            </Box>
            <Progress value={progressValue} borderRadius='full' />
          </Box>
          <Button colorScheme='white' color='black' w="100%" onClick={clickHandler}  _hover={{ backgroundColor: 'gray.100' }}>İmtina et</Button>
      </Container>
    </Stack>
  )
}

export default AsanImzaPinTwo;