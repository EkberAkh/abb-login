"use client";
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { Box, HStack, VStack, Text, FormControl, FormLabel, Input, Button, InputGroup, InputLeftAddon  } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname} from "next/navigation";

export default function Home() {
  const currentPath = usePathname();
  console.log(currentPath);

  const isLoginPath = /\/(az|en|ru)\/login/.test(currentPath);




  return (
    <Layout>
    
    <VStack 
        w="100%"
        align='flex-start'
        p='80px' 
        gap='24px' >
      <HStack 
        w="100%"
        fontSize="30px" lineHeight="36px" fontWeight="600" 
        gap='8px'
        p='16px 0'
        color='gray.400'>
            <Link href='/'>
              <Text  color={isLoginPath ? "gray.700" : "gray.400"}
              >ASAN imza</Text>
            </Link>
            <Text color="gray.400">/</Text>
            <Link href='/az/kobilotp'>
              <Text
              >KOBIL OTP</Text>
            </Link>
      </HStack>
      <VStack 
            gap='8px'
            w='100%'>
          <FormControl w='100%'>
            <FormLabel color='gray.700'>ASAN İmza mobil nömrəsi</FormLabel>
            <InputGroup w='100%'>
              <InputLeftAddon children='+994'  color='gray.700' bg='gray.100'/>
              <Input type='tel' placeholder='00 000 00 00'w='100%'/>
            </InputGroup>
          </FormControl>
      </VStack>
      <VStack gap='8px' w='100%'>
          <FormControl>
            <FormLabel color='gray.700'>ASAN İmza İstifadəçi ID-si</FormLabel>
            <Input type='number' w='100%'/>
          </FormControl>
      </VStack>
      <Button colorScheme='white' bg='gray.100' w='100%'>Davam et</Button>
      <Text textAlign='center' w='100%' color='gray.600'>və ya</Text>
      <Button color='gray.800' w='100%'>Qeydiyyat</Button>


    </VStack>
    </Layout>
  );
}
