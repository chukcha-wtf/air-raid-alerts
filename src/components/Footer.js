import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box
      bg={'gray.50'}
      mt={10}
      color={'gray.700'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Text fontWeight={'700'} fontSize={'lg'}>
              #RussiaInvadedUkraine
            </Text>
            <Text fontWeight={'700'} fontSize={'lg'}>
              #UkraineUnderAttack
            </Text>
            <Text fontWeight={'700'} fontSize={'lg'}>
              #StrongerTogether
            </Text>
            <Text fontWeight={'700'} fontSize={'lg'}>
              #SlavaUkraini
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Charities</ListHeader>
            <Link target={"_blank"} href={'https://www.comebackalive.in.ua/'}>Come Back Alive</Link>
            <Link target={"_blank"} href={'https://razomforukraine.org/'}>Razom</Link>
            <Link target={"_blank"} href={'https://koloua.com/'}>Kolo</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Volonteering</ListHeader>
            <Link target={"_blank"} href={'https://fightforua.org/'}>Share The Truth</Link>
            <Link target={"_blank"} href={'https://ukrainer.net/thread-en/war/'}>Join Foreign Legion</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Helping Refugees</ListHeader>
            <Link target={"_blank"} href={'https://pomagamukrainie.gov.pl/#section2'}>Poland</Link>
            <Link target={"_blank"} href={'https://allaboutberlin.com/guides/ukraine'}>Germany</Link>
            <Link target={"_blank"} href={'https://luce.lanazione.it/cosa-sta-facendo-litalia-per-lucraina-aiuti-ai-profughi-piani-di-accoglienza-e-associazioni-in-campo-ecco-tutto-quello-che-ce-da-sapere/'}>Italy</Link>
            <Link target={"_blank"} href={'https://www.paris.fr/pages/paris-se-mobilise-pour-l-ukraine-20504'}>France</Link>
            <Link target={"_blank"} href={'https://www.thetimes.co.uk/article/how-to-help-ukraine-uk-v8grddrs8'}>United Kingdom</Link>
          </Stack>
          <Stack align={'flex-start'}></Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
