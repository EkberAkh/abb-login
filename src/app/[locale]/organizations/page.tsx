"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Flex,
  CloseButton,
  Spacer,
  Container,
  Text,
  Center,
  Select,
  Button,
} from "@chakra-ui/react";


type Organization = {
  cif: string;
  name: string;
};

export default function Organizations() {

  const [organization, setOrganization] = useState<Organization[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const getOrganizations = async () => {
      try {
        const response = await fetch(`https://mock-api-login-abb.vercel.app/user/v1/users/companies?asanId=020292`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setOrganization(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    getOrganizations();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Flex>
        <Spacer />
        <CloseButton size="lg" m="30px" />
      </Flex>
      <Container justifyContent="center" alignItems="center" h="100%">
        <Center h="700px">
          <Flex flexDirection="column" gap="30px">
            <Text fontWeight="bold" fontSize="35px">
              Davam etmək üçün seçin
            </Text>
            <Select
              placeholder="Axtar "
              value={inputValue}
              onChange={handleInputChange}
            >
             {organization &&
                organization.map((org) => (
                  <option key={org.cif} value={org.name}>
                    {org.name}
                  </option>
                ))}
            </Select>
            <Button bg="blue.500" isDisabled={!inputValue.trim()}>
              Davam et
            </Button>
            <Button bg="gray.100">Imtina et</Button>
          </Flex>
        </Center>
      </Container>
    </>
  );
}