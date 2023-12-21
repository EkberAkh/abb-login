import { HStack, Image, Text } from "@chakra-ui/react";
import { NavigationLink } from "../NavigationLink";
import { usePathname } from "../../utils";
import { useCurrentLang } from "../../hooks";

export const Header = () => {
  const langs = ["az", "en", "ru"];
  const currentPath = usePathname();
  const currentLang = useCurrentLang();

  return (
    <HStack w="100%" justify="space-between" padding="28px 32px">
      <Image alt="ABB Business Logo" src="/login/images/logo-business.svg" />
      <HStack spacing="16px">
        {langs.map((lang) => (
          <NavigationLink href={currentPath} locale={lang} key={lang}>
            <Text
              id={`language-button-${lang}`}
              data-test-id={`language-button-${lang}`}
              color={currentLang === lang ? "gray.700" : "gray.400"}
              fontWeight="semibold"
              fontSize="sm"
              lineHeight="6"
              textTransform="uppercase"
              cursor="pointer"
            >
              {lang}
            </Text>
          </NavigationLink>
        ))}
      </HStack>
    </HStack>
  );
};
