import React, { useEffect, useState } from "react";
import { projectStore } from "../../../recoil/projectStore";
import { useRecoilState } from "recoil";
import { ChannelType } from "../../../types/Channel";
import useTapTempo from "../../../hooks/audio/useTapTempo";
import { buttonInfo } from "../../../utils/text";
import { useHotkeys } from "react-hotkeys-hook";
import { TIME_CONVERSION_RESOLUTION } from "../../../const/musicalConversionConstants";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Divider,
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
  Text,
  useRadioGroup
} from "@chakra-ui/react";
import RadioCard from "../../atoms/Buttons/RadioCard";
import { channelTypeToLabel } from "../../../utils/channelTypeToLabel";

interface Props {
  open: boolean;
  onCancel?: () => void;
  onCreate?: (channelType: ChannelType, numChannels: number) => void;
}

function NewProjectDialog({ onCreate, open, onCancel }: Props) {
  const [name, setName] = useRecoilState(projectStore.name);
  const [tempoMap, setTempoMap] = useRecoilState(projectStore.tempoMap);
  const [length, setLength] = useRecoilState(projectStore.lengthInQuarters);

  const [channelType, setChannelType] = useState(ChannelType.AUDIO);
  const [numChannels, setNumChannels] = useState(1);

  const { tap, tappedTempo } = useTapTempo(tempoMap[0]);

  useHotkeys('space', tap);

  useEffect(() => {
    setTempoMap({ 0: tappedTempo });
  }, [tappedTempo, setTempoMap]);

  const onClose = () => onCancel && onCancel;

  const options = [ChannelType.AUDIO, ChannelType.INSTRUMENT]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "channel-type",
    defaultValue: "react",
    onChange: val => setChannelType(val as ChannelType),
  })

  const group = getRootProps();

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome To Syra - Create a new Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={'lg'}>
            Syra is a web based DAW with a professional workflow that empowers you to create top notch music with your
            friends and colleagues.
          </Text>
          <Divider mt={4}/>
          <FormControl isRequired marginY={4}>
            <FormLabel>Project Name</FormLabel>
            <Input
              type="text"
              id="name"
              name={'name'}
              aria-describedby="name-helper-text"
              onChange={e => setName(e.target.value)}
              value={name}/>
          </FormControl>
          <Flex marginY={4}>
            <FormControl isRequired flex={2}>
              <FormLabel>Tempo</FormLabel>
              <NumberInput value={tempoMap[0]} onChange={val => setTempoMap({ 0: parseFloat(val) })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button flex={1} colorScheme={'teal'} onClick={tap} title={buttonInfo('Tap Tempo', 'Space')}>
              Tap
            </Button>
          </Flex>
          <FormControl isRequired flex={2}>
            <FormLabel>Project Length</FormLabel>
            <NumberInput value={length / TIME_CONVERSION_RESOLUTION} onChange={val => setLength(parseInt(val) / TIME_CONVERSION_RESOLUTION)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl isRequired flex={2}>
            <FormLabel>Create Channels</FormLabel>
            <NumberInput value={numChannels} onChange={val => setNumChannels(parseInt(val))}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });

              return (
                <RadioCard key={value} {...radio}>
                  {channelTypeToLabel(value)}
                </RadioCard>
              )
            })}
          </HStack>

          <Alert status="info">
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
