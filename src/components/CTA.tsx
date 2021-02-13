import { Link, Button } from "@chakra-ui/react";

import { Container } from "./Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="relative"
    bottom="0"
    width="100%"
    maxWidth="35rem"
    py={2}
    mt={5}
  >
    <Link isExternal href="https://github.com/kowasaur/cheemscoin" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="orange">
        Github
      </Button>
    </Link>
    <Link isExternal href="https://discord.gg/wdt6swb3H8" flexGrow={1} mx={2}>
      <Button width="100%" colorScheme="orange" variant="outline">
        Discord
      </Button>
    </Link>
  </Container>
);
