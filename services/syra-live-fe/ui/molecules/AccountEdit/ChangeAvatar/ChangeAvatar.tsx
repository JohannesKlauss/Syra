import React, { useRef, useState } from 'react';
import {
  Box,
  Button, Flex, Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Cropper from 'react-easy-crop';
import { RiZoomOutLine, RiZoomInLine } from 'react-icons/ri';
import useChangeAvatar from './useChangeAvatar';

interface Props {
  avatar: string;
  onAvatarChanged: (src: string) => void;
}

const SLIDER_MIN = 1;
const SLIDER_MAX = 3;
const SLIDER_STEP = 0.1;

function ChangeAvatar({ avatar, onAvatarChanged }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const {onCropComplete, onFileChange, isLoading, imageSrc, onApply} = useChangeAvatar(avatar, onClose);

  return (
    <>
      <Button variant={'link'} colorScheme={'teal'} onClick={onOpen}>{t('Change profile image')}</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>{t('Change your profile image')}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Box pos={'relative'} h={'30vh'}>
              <Input
                hidden
                onChange={onFileChange}
                placeholder={t('Upload a new profile image')}
                type={'file'}
                ref={inputRef}
                accept="image/*"
              />
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </Box>

            <Flex align={'center'} mt={8} mb={4}>
              <Flex align={'center'} flex={1}>
                <Box as={RiZoomOutLine} size="24px" cursor={'pointer'}
                     onClick={() => setZoom(zoom => zoom - SLIDER_STEP)}/>
                <Slider
                  value={zoom}
                  min={SLIDER_MIN}
                  max={SLIDER_MAX}
                  step={SLIDER_STEP}
                  color={'teal'}
                  mx={8}
                  aria-labelledby="Zoom"
                  onChange={zoom => setZoom(zoom)}
                >
                  <SliderTrack/>
                  <SliderFilledTrack/>
                  <SliderThumb/>
                </Slider>
                <Box as={RiZoomInLine} size="24px" cursor={'pointer'}
                     onClick={() => setZoom(zoom => zoom + SLIDER_STEP)}/>
              </Flex>

              <Button ml={8} size={'sm'} colorScheme={'teal'} onClick={() => inputRef.current?.click()}>
                {t('Upload new image')}
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={() => onApply(onAvatarChanged)} isLoading={isLoading}>{t('Apply')}</Button>
            <Button variant="ghost" onClick={onClose}>{t('Cancel')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChangeAvatar;
