import React, { useEffect, useState } from 'react';
import { projectStore } from '../../../recoil/projectStore';
import { useRecoilState } from 'recoil';
import { ChannelType } from '../../../types/Channel';
import useTapTempo from '../../../hooks/audio/useTapTempo';
import { buttonInfo } from '../../../utils/text';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useRadioGroup,
} from '@chakra-ui/react';
import RadioCard from '../../atoms/Buttons/RadioCard';
import { channelTypeToLabel } from '../../../utils/channelTypeToLabel';
import * as Tone from 'tone';

interface Props {
  open: boolean;
  onCancel?: () => void;
  onCreate?: (channelType: ChannelType, numChannels: number) => void;
}

function NewProjectDialog({ onCreate, open, onCancel }: Props) {
  const [projectLength, setProjectLength] = useState(60); // This is measured in bars
  const [name, setName] = useRecoilState(projectStore.name);
  const [tempoMap, setTempoMap] = useRecoilState(projectStore.tempoMap);
  const [, setLength] = useRecoilState(projectStore.lengthInTicks); // This is measured in ticks

  const [channelType, setChannelType] = useState(ChannelType.AUDIO);
  const [numChannels, setNumChannels] = useState(1);

  const { tap, tappedTempo } = useTapTempo(tempoMap[0]);

  useHotkeys('space', tap);

  useEffect(() => {
    setTempoMap({ 0: tappedTempo });
  }, [tappedTempo, setTempoMap]);

  useEffect(() => {
    // Fail safe check if the time signature hasn't been set to 1/4 yet.
    if (Tone.getTransport().timeSignature === 4) {
      setLength(Tone.Ticks(`${projectLength}:0:0`).toTicks());
    } else {
      setLength(Tone.Ticks(`${projectLength * 4}:0:0`).toTicks());
    }

  }, [projectLength, setLength]);

  const onClose = () => onCancel && onCancel();

  const options = [ChannelType.AUDIO, ChannelType.INSTRUMENT];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'channel-type',
    defaultValue: ChannelType.AUDIO,
    onChange: (val) => setChannelType(parseInt(val as string) as ChannelType),
  });

  const group = getRootProps();

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>S Y R A - Set up your new session</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired marginY={4}>
            <FormLabel>Project Name</FormLabel>
            <Input
              type="text"
              id="name"
              name={'name'}
              aria-describedby="name-helper-text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>

          <FormControl isRequired flex={2}>
            <FormLabel>Tempo</FormLabel>
            <Flex marginY={4} alignItems={'center'}>
              <NumberInput value={tempoMap[0]} mr={4} onChange={(val) => setTempoMap({ 0: parseFloat(val) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button flex={1} colorScheme={'teal'} onClick={tap} title={buttonInfo('Tap Tempo', 'Space')}>
                Tap
              </Button>
            </Flex>
          </FormControl>

          <FormControl isRequired flex={2}>
            <FormLabel>Project Length</FormLabel>
            <NumberInput value={projectLength} onChange={(val) => setProjectLength(parseInt(val))}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl isRequired flex={2}>
            <FormLabel>Create Channels</FormLabel>
            <NumberInput value={numChannels} onChange={(val) => setNumChannels(parseInt(val))}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <HStack mt={4} {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });

              return (
                <RadioCard key={value} {...radio}>
                  {channelTypeToLabel(value)}
                </RadioCard>
              );
            })}
          </HStack>

          <Alert status="info" my={4}>
            <AlertIcon />
            <AlertDescription>You can always change all the parameters later inside the editor.</AlertDescription>
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={() => onCreate && onCreate(channelType, numChannels)}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default NewProjectDialog;
