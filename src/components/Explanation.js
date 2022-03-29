import React from 'react';

import {
  Container,
  Box,
  Stack,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react';

import {
  MdCheckCircle,
  MdWarning,
} from "react-icons/md";


const Topic = ({ id, title, children }) => {
  return (
    <Stack id={id} pt={12}>
      <Text fontSize={{base: '3xl', md: '4xl'}} fontWeight={'bold'} color='gray.800'>
        {title}
      </Text>
      <Box fontSize={'lg'} color='gray.700'>
        {children}
      </Box>
    </Stack>
  )
}

const ExplanationLink = ({ href, children }) => {
  return <Link color='#3798ce' href={href}>{children}</Link>
}

export const Explanation = ({ state }) => {
  return (
    <Container py={28} maxW={'container.lg'}>
      <Topic title="What Happened?">
        On February 24th at around 5 am the Russian army invaded Ukraine.
        <br/>
        <br/>
        It all started with the targeted missile strickes on military bases as well as airports all across the country.
        At the same time russian artillery destroyed positions of Ukrainian border guards and russian forces entered Ukraine from both Russian and Belorussian territory.
        <br/>
        <br/>
        The main goal was to capture Kyiv within the first two days of invasion and overthrow the governement. Russian soldiers even carried <ExplanationLink href="https://www.facebook.com/permalink.php?story_fbid=pfbid0frgupe5q42zbyDsag46CCGb53oWe591ygaVuQo2T2Dsc47EJNTo9DSjCBfKsBWnUl&id=1637436679821303">ceremonial uniform</ExplanationLink> instead of food supplies expecting quick and easy vistory.
        <br/>
        <br/>
        But Ukrainians fought back and wasn't ready to give up easily. The original invasion stalled and Russians has changed the strategy.
        They begin slow occupation all across the eastern part of Ukraine, capturing cities like Kherson and encercling cities like Mariupol, Kharkiv, Chernihiv and Kyiv.
        <br/>
        <br/>
        Instead of continuing the slow occupation, which proved to be complicated due to strong resistance from Ukrainians - they chose different strategies and began
        shelling and bombing the cities. They were targeting not only military infrastructure but also civilian infrastructure, government buildings and even the houses where ordinary people lived.
        In an attempt to provoke humanitarian chrisis and force ukrainians to surrender.
        <br/>
        <br/>
        That's how the war continues till this day. Over 3000 civilians was killed, thousands of houses was destroyed, millions of people were internally displaced.
      </Topic>
      <Topic title="Why would Russia do this?">
        It is not clear what current Russian military objectives are but we can say for sure that they will never forget the original idea behind it.
        <br/>
        <br/>
        As mentioned by Russian president Vladimir Putin, russians believe that Ukraine was created artificially and ukrainians are just rebelous russians.
        That's why Ukraine should not exist as an independent state and ukrainian culture should be destroyed completely.
        This idea falls nicely under the main imperialistic narrative that russian government and intellectuals has been promoting for the past 300 years
        and russian citizens are happy to support.
        <br/>
        <br/>
        Yes, you might've heard that this is due to the NATO expansion, or because Russia has some security concerns, or because there were some nazis in Ukraine.
        But the truth is - Russia (and russians) cannot give up their <ExplanationLink href="https://www.instagram.com/p/CbBKJvvs2nu">imperialistic way of thought</ExplanationLink>. That's why they have started <ExplanationLink href="https://ukrainer.net/russian-wars/">all this wars</ExplanationLink>. A war in Chechnia, that's why they invided Georgia, that's why they helped Kazakhstan
        to forcefully suppress peaceful protests, that's why they've been supporting belarussian dictator Lukashenko and in fact occupied Belarus two years ago.
        <br/>
        <br/>
        That's the reason why they want to occupy Ukraine as well.
        <br/>
        <br/>
        And Russian Imperialism is the reason why they won't stop after Ukraine. If they could, or, rather, once they could - they will be invading Baltics, Poland, and every other country they believe shouldn't exist.
      </Topic>
      <Topic title="What does Russians think about it?">
        Unfortunately <ExplanationLink href="https://www.atlanticcouncil.org/blogs/ukrainealert/not-just-putin-most-russians-support-the-war-in-ukraine/">around 70%</ExplanationLink> of russians support this invasion and are quite happy seeing their own citizens dying fighting war in neighboring country.
        Even the fact that 15,000 russians has died already as well as the fact that russians has killed more than 3,000 civilians in Ukraine does not help to reduce the support
        for the war in the russian society.
        <br/>
        <br/>
        You might say that this is happening because of the fact that russians have limited access to information, because media are controlled by the state in Russia.
        But the truth is that support for the war by the russians living abroad is very high as well. If you know someone from Russia living abroad - go talk to them
        about the wars in Georgia, occupation of Crimea or even the recent Russian invasion to Ukraine.
        <br/>
        <br/>
        We bet you will be surprised.
        <br/>
        <br/>
        There is, however a tiny minority of russians who are standing against the war(s) and supporting refugees and each other.
        Unfortunately this group is so small that they have no political support inside their own country.
      </Topic>
      <Topic title="What are Ukrainians doing right now?">
        The Russian invasion to Ukraine came by surprise to ost ukrainians. After all this years of russians promoting the "brotherly nations" narrative
        no one expected invasion, cause "brothers" typically don't try to kill "brothers".
        <br/>
        <br/>
        Shortly after the invasion began ukrainians started to fight back. Ukrainian military was oing everything they could to stop the invasion.
        While ordinary ukrainians <ExplanationLink href="https://dailylviv.com/news/sytuatsiyi-i-pryhody/u-zaporizhzhi-tysyachi-tysyachi-lyudei-bazhayut-vstupyty-v-teroboronu-video-97525">rushed to join the Teritorial Defence forces</ExplanationLink>.
        <br/>
        <br/>
        Everyday looking at the escalation - people began to volonteer for the army as well as for each other.
        A lot of roganizations formed where ukrainians was building fortifications, helping people to evacuate, and buying all possible protective gear
        from neighboring countries and provide it to ukrainian defenders.
        <br/>
        <br/>
        At the same time millions of ukrainians were trying to get to safety by moving to remote Ukrainian regions or fleeing to neighboring countries.
        In total around 5 million ukrainians refugees evacuated abroad.
        The majority of them decided to stay in Poland and most of them are waiting for Ukrainian victory to be able to get back home.
        <br/>
        <br/>
        But around 35 million ukrainians are staying in Ukraine and are constantly getting hit by Russian missiles or killed by russians while they're trying to evacuate
        from the most affected cities.
      </Topic>
      <Topic title="How did the West react?">
        Once the war started - the West has implemented unprecendent sanctions against Russia.
        While at the same time kept buying russian fossil fuels sending over 20 Billion US dollars to Russia to help sponsor this war.
        <br/>
        <br/>
        United States and United Kingdom sent a lot of anti tank and anti aircraft handheld devices to help with counter offencives on the ground.
        Poland and Baltic states also provided unprecendent aount of military equipment to Ukraine.
        <br/>
        <br/>
        But Russia still has air superiority while loosing ground control. The fact that NATO members are refusing to provide any air defence systems
        or fighter jets makes it much harder for Ukraine to win this war.
        <br/>
        <br/>
        But turns out that not all democratic countries are willing to support the democratic principles and stand against the war and dictatorship.
        Their governments value business relationships with Russia much more. For example German Ministry of Finance was
        <ExplanationLink href="https://kyivindependent.com/uncategorized/ambassador-says-german-minister-was-against-helping-ukraine-thought-it-would-fall-within-hours/">expecting Ukraine to fall within hours</ExplanationLink>
        and refused initial financial support to Ukraine.
        <br/>
        <br/>
        Hungary is playing in favor of Russia blocking transportation of any ,ilitary related equipment to Ukraine over their territory.
        <br/>
        <br/>
        Also thaks to some data leaks acquired by Anonymous group a lot of European politicians was <ExplanationLink href="https://newlinesmag.com/reportage/exclusive-russia-backs-europes-far-right/">sponsored by russian state for years</ExplanationLink>
        and now making it harder for their countries to stand against the Russian dictatorship.
      </Topic>
      <Topic id="help" title="Is the West doing enough?">
        <Text fontWeight={'bold'}>NO</Text>
      </Topic>
      <Topic title="What can I do to help?">
        <Text fontWeight={'bold'}>Do</Text>
        <br/>
        <List>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Find an anti-war rally in your area and demand:
          </ListItem>
          <UnorderedList ml={10}>
            <ListItem>Giving Ukrainians serious anti-air and anti-aircraft systems.</ListItem>
            <ListItem>Banning all imports of Russian oil, gas and coal.</ListItem>
          </UnorderedList><br/>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Donate to local charity in your area.
          </ListItem><br/>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Donate to local charity in Ukraine.
          </ListItem><br/>
        </List>
        <br/>
        <Text fontWeight={'bold'}>Don't</Text>
        <br/>
        <List>
          <ListItem>
            <ListIcon as={MdWarning} color='red.500' />
            Donate to the Red Cross
          </ListItem><br/>
          <ListItem>
            <ListIcon as={MdWarning} color='red.500' />
            Donate to the UNICEF
          </ListItem><br/>
          <ListItem>
            <ListIcon as={MdWarning} color='red.500' />
            Donate to Doctors Without Borders
          </ListItem>
        </List>
      </Topic>
    </Container>
  )
}