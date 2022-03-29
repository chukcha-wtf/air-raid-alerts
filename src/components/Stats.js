import React from 'react';

import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

const Item = ({ title, text }) => (
  <GridItem w="100%">
    <Flex flexDirection={'column'}>
      <Text fontSize={{base: '3xl', md: '4xl'}} fontWeight={'bold'} color='gray.800'>
        {title}
      </Text>
      <Box fontSize={'sm'} color='gray.600'>
        {text}
      </Box>
    </Flex>
  </GridItem>
);

export const Stats = ({ state }) => {
  const warStartDate = new Date('2022-02-24');
  const today = new Date();
  const diffTime = Math.abs(today - warStartDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const numberOfBombs = state.numberOfBombs.toLocaleString();
  const peopleDisplaced = state.peopleDisplaced.toLocaleString();
  const civiliansKilled = state.civiliansKilled.toLocaleString();
  const childrenKilled = state.childrenKilled.toLocaleString();
  const russiansSupportWar = state.russiansSupportWar.toLocaleString();
  const oilMoney = state.oilMoney.toLocaleString();
  const refugeesCount = state.refugeesCount.toLocaleString();
  const peopleKidnapped = state.peopleKidnapped.toLocaleString();
  const clinicsDestroyed = state.clinicsDestroyed.toLocaleString();
  const economyDamage = state.economyDamage.toLocaleString();

  return (
    <Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <Item
          title={`${diffDays} days`}
          text="Ukraine resists a full scale Russian invasion" />
        <Item
          title={`${numberOfBombs} bombs`}
          text="was dropped on Ukrainian cities." />
        <Item
          title={clinicsDestroyed}
          text="hospitals and schools damaged or destroyed." />
        <Item
          title={civiliansKilled}
          text={`civilians has being killed by the Russian citizens (including more than ${childrenKilled} children).`} />
        <Item
          title={`${russiansSupportWar}% of Russians`}
          text={'feel "pride, joy, respect, hope" for war against Ukraine'} />
        <Item
          title={`${oilMoney} Billions EUR`}
          text="European Union has paid to Russia since the beginning of the war." />
        <Item
          title={refugeesCount}
          text="refugees flew to Europe in search for safety." />
        <Item
          title={`${economyDamage} Trillion USD`}
          text="global economy loss as a result of Russian war." />
      </Grid>
    </Container>
  )
}
