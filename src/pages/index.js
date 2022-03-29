import React, { useEffect, useRef, useState } from 'react';

import {
  Link as ChakraLink,
  LinkOverlay,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  LightMode,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { useData } from '../utils/db';
import { Explanation } from '../components/Explanation';


const ConfirmationDialog = ({ isOpen, onClose }) => {
  const handleHelp = () => {
    window.location.href = '/#help';
    onClose();
  }

  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        onClose={onClose}
        isOpen={isOpen}
        autoFocus={false}
        colorScheme='light'
        variant={'light'}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Sirens Turned Off</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            We've turned the sirens off for you. We wish it would've been that easy for 40 millions citizens of Ukraine. Help us to end this war!
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant='ghost' onClick={onClose}>
              No
            </Button>
            <Button colorScheme='blue' ml={3} onClick={handleHelp}>
              How can I help?
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

const PrivacyConsent = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} autoFocus={false} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cookie Policy</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          We value your privacy, that's why our website doesn't collect any personal data (including cookies). We just want to make sure that you are ok with that.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const Index = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  const { isOpen: isAlertOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
  const { isOpen: isPrivacyOpen, onOpen: openPrivacy, onClose: closePrivacy } = useDisclosure({
    defaultIsOpen: true
  })
  
  const muteButton = useRef();
  const player = useRef();

  const {
    state,
    isBombed,
    totalAirAlerts,
    uniqueTags,
    currentlyBombedRegions,
  } = useData();
  
  const toggleSound = async () => {
    const nextIsMuted = !isMuted;
    if (isMuted) {
      await player?.current?.play();
    }
    else {
      await player?.current?.pause();
    }

    setIsMuted(nextIsMuted);

    if (nextIsMuted) {
      openAlert();
    }
  }

  const checkPlayer = async (isBombed, hasInteracted) => {
    if (!hasInteracted) {
      return;
    }

    try {
      if (isBombed) {
        await player?.current?.play();
        setIsMuted(false);
      }
      else {
        await player?.current?.pause();
        setIsMuted(true);
      }
    } catch (er) {
      console.log("Failed to start player", { er })
    }
  }

  const closePrivacyConcent = () => {
    setHasInteracted(true);
    closePrivacy();
  }

  useEffect(() => {
    checkPlayer(isBombed, hasInteracted);
  }, [isBombed, hasInteracted]);

  return (
    <LightMode>
      <Header isMuted={isMuted} toggleSound={toggleSound} />
      <Hero
        totalAirAlerts={totalAirAlerts}
        uniqueTags={uniqueTags}
        currentlyBombedRegions={currentlyBombedRegions}
        isBombed={isBombed} />
      <Stats state={state} />
      <Explanation />
      <Footer />
      <ConfirmationDialog isOpen={isAlertOpen} onClose={closeAlert} />
      <PrivacyConsent isOpen={isPrivacyOpen} onClose={closePrivacyConcent} />
      <audio ref={player} muted={isMuted} autoPlay={isBombed} loop style={{display: 'none'}}>
        <source src="/air-siren.mp3" type="audio/mpeg"></source>
        Your browser does not support the audio tag.
      </audio>
      <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js" data-type="four" data-position="bottom-right"></script>
    </LightMode>
  );
}

export default Index
