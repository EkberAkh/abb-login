import { HStack, Text } from "@chakra-ui/react";
import { NavigationLink } from "../NavigationLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AsanKobilLink = () => {
  const [textValue, setTextValue] = useState("ASAN imza");
  const pathname = usePathname() || "";
  const isAsanImzaPath = /^(\/az|\/en|\/ru)$/.test(pathname);
  const clickHandler = (e: any) => {
    setTextValue(e.target.textContent);
  };
  
  useEffect(() => {
    if (/\/kobilotp$/.test(pathname)) {
      setTextValue("KOBIL OTP");
    } else if (/\/login$/.test(pathname)) {
      setTextValue("ASAN IMZA");
    } else {
      setTextValue("ASAN imza");
    }
  }, [pathname]);

  return (
    <HStack
      w="100%"
      fontSize="30px"
      lineHeight="36px"
      gap="8px"
      p="16px 0"
      color="gray.400"
    >
      <NavigationLink href="/">
        <Text
        fontWeight="600"
          cursor="pointer"
          color={
            textValue === "ASAN IMZA" || /^(\/az|\/en|\/ru)$/.test(pathname)
              ? "gray.700"
              : "gray.400"
          }
          onClick={clickHandler}
        >
          ASAN imza
        </Text>
      </NavigationLink>

      <Text fontWeight="600">/</Text>
      <NavigationLink href="/kobilotp">
        <Text
        fontWeight="600"
          cursor="pointer"
          color={
            textValue === "KOBIL OTP" || /\/kobilotp$/.test(pathname)
              ? "gray.700"
              : "gray.400"
          }
          onClick={clickHandler}
        >
          KOBIL OTP
        </Text>
      </NavigationLink>
    </HStack>
  );
};

export default AsanKobilLink;