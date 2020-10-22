import React, { useCallback, useState } from 'react';
import {
  Box,
  Button, Divider, Flex, Modal, ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, Skeleton, Text,
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { IoMdAdd } from 'react-icons/io';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { format, fromUnixTime } from 'date-fns';
import { GetMyMixdownsQuery, useGetMyMixdownsQuery } from '../../../../../gql/generated';

type PartialProject = GetMyMixdownsQuery['me']['ownsProjects'][0];

interface Props {
  onSelectMixdown: (mixdownId: string, name: string) => void;
}

function AttachMixdown({ onSelectMixdown }: Props) {
  const { data, loading, error } = useGetMyMixdownsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMixdownId, setSelectedMixdownId] = useState<string>(null);
  const [selectedProject, setSelectedProject] = useState<PartialProject>(null);
  const [selectProjectStep, setSelectProjectStep] = useState(true);
  const { t } = useTranslation();

  const onClose = () => {
    setIsOpen(false);
  };

  const onSelect = () => {
    setIsOpen(false);
  };

  const onSelectProject = useCallback((project: PartialProject) => {
    setSelectedProject(project);
    setSelectProjectStep(false);
  }, []);

  if (error) return null;
  if (loading) return <Skeleton/>;

  const projects = data.me.ownsProjects;

  console.log('projects', projects);

  return (
    <>
      <Button variantColor={'teal'} leftIcon={IoMdAdd} onClick={() => setIsOpen(true)}>Attach Mixdown</Button>
      <Modal onClose={onClose} isOpen={isOpen} size={'6xl'} isCentered>
        <ModalOverlay opacity={1}/>
        <ModalContent pb={5}>
          <ModalHeader>{t('Attach Mixdown')}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text fontSize={'lg'}>{t(selectProjectStep ? 'Choose Project' : 'Choose Mixdown')}</Text>
            <Flex justify={'center'} align={'center'}>
              <Box flex={2} marginRight={4}>
                {projects.map(project => (
                  <Button
                    rightIcon={'chevron-right'}
                    isFullWidth
                    onClick={() => onSelectProject(project)}
                    variantColor={selectedProject && selectedProject.id === project.id ? 'teal' : undefined}
                    leftIcon={selectedProject && selectedProject.id === project.id ? RiCheckboxCircleLine : null}
                    marginY={4}
                  >
                    {project.name}
                    {''}
                    {t('last update on')}
                    {' '}
                    {format(fromUnixTime(project.updatedAt), 'MMMM dd HH:mm:ss')}
                  </Button>
                ))}
              </Box>
              <Box flex={1} marginLeft={4}>
                {selectedProject && selectedProject.mixdowns.map(mixdown => (
                  <Button
                    isFullWidth
                    leftIcon={selectedMixdownId === mixdown.id ? RiCheckboxCircleLine : null}
                    variantColor={selectedMixdownId === mixdown.id ? 'teal' : undefined}
                    onClick={() => setSelectedMixdownId(mixdown.id)}
                    marginY={4}
                  >
                    {t('#{{versionNumber}}', { versionNumber: mixdown.version })}
                    {' '}
                    {t('created on')}
                    {' '}
                    {format(fromUnixTime(mixdown.createdAt), 'MMMM dd')}
                  </Button>
                ))}
              </Box>
            </Flex>


            <Divider marginY={4}/>
            <Flex>
              <Button marginRight={4} isFullWidth onClick={() => setIsOpen(false)}>{t('Cancel')}</Button>
              <Button marginLeft={4} isDisabled={selectedMixdownId === null} isFullWidth onClick={onSelect}
                      variantColor={'teal'}>{t('Select Mixdown')}</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AttachMixdown;
