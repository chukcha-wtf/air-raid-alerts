import { Flex, Heading, Container, Stack, Text, Box } from '@chakra-ui/react'
import { Map } from './Map';

export const Hero = ({
  isBombed,
  totalAirAlerts,
  uniqueTags,
  currentlyBombedRegions,
}) => {
  const regionsAffected = Object.keys(currentlyBombedRegions).length;
  const uniqueAffectedRegions = uniqueTags.length;

  const isBombedMainText = isBombed ? 'Yes' : 'No';
  const isBombedTextColor = isBombed ? 'red.400' : 'green.400';

  const isBombedHeaderText = isBombed ? "Ukraine is bombed right now" : "Ukraine is not bombed right now";
  const isBombedExplanatoryText = isBombed
    ? `There are active Air Raid alerts across ${regionsAffected} regions of Ukraine. People are hiding in the basements hoping that they will survive this time and their home won't be destroyed by the russian missile.`
    : "While there are no active Air Raid alerts, cities like Kharkiv (1,400,000 citizens), Chernihiv (285,000 citizens), Mariupol (445,000 citizens), Kyiv (3,500,000 citizens) and dozen others are being hit with constant artillery strikes by russian citizens killing and wounding dozens innocent civilians on a daily basis.";

  const totalBombingText = `There were total of ${totalAirAlerts} active Air Raid alerts across ${uniqueAffectedRegions} regions of Ukraine over the past 24 hours.`;

  return (
    <Container maxW={'5xl'}>
      <Box
        mt={32}
        bgImage="linear-gradient(rgba(255, 255, 255, 0.725),rgba(255, 255, 255, 0.7)) , url('./europe-map.svg')"
        bgSize={'contain'}
        bgRepeat={'no-repeat'}
        bgPosition={'top'}
      >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={10}
          pb={20}
          mb={10}>
          <Text
            fontWeight={700}
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
            as={'span'}
            color={isBombedTextColor}>
            {isBombedMainText}
          </Text>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            color='gray.800'
            lineHeight={'110%'}>
            {isBombedHeaderText}
          </Heading>
          <Text color={'gray.600'} maxW={'3xl'}>
            {isBombedExplanatoryText}
          </Text>
          <Text fontWeight={600} color={'gray.700'} maxW={'3xl'}>
            {totalBombingText}
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
