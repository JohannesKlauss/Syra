import React, { useState } from 'react';
import {
  Box,
  Button, Divider,
  Flex, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, Skeleton,
} from '@chakra-ui/core';
import { formatDistanceToNow, fromUnixTime } from 'date-fns';
import { useMyMixdownsQuery } from '../../../../../gql/generated';
import { PartialProject } from '../../../../../types/dtos';
import { useTranslation } from 'react-i18next';
import ClickableTextBox from '../../../../atoms/ClickableTextBox/ClickableTextBox';
import SearchableGrid from '../../../SearchableGrid/SearchableGrid';
import PreviewPlay from '../../../PreviewPlay/PreviewPlay';

interface Props {
  onClose: () => void;
  onSelectMixdownId: (mixdownId: string) => void;
  isOpen: boolean;
}

function AttachMixdownModal({ onClose, isOpen, onSelectMixdownId }: Props) {
  const { data, loading, error } = useMyMixdownsQuery();
  const [selectedProject, setSelectedProject] = useState<PartialProject>(null);
  const [selectedMixdownId, setSelectedMixdownId] = useState<string>(null);
  const { t } = useTranslation();

  if (error) return null;
  if (loading) return <Skeleton/>;

  const projects = data.me.ownsProjects;

  return (
    <Modal onClose={onClose} isOpen={isOpen} size={'6xl'}>
      <ModalOverlay opacity={1}/>
      <ModalContent pb={5}>
        <ModalHeader>{t('Attach Mixdown')}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <SearchableGrid
            data={projects}
            title={t('Select Project')}
            placeholder={t('Search Project')}
            searchKeys={['name', 'updatedAt']}
            render={item => (
              <ClickableTextBox
                key={item.id}
                isSelected={selectedProject && selectedProject.id === item.id}
                title={item.name}
                subtext={t('{{time}} ago', { time: formatDistanceToNow(fromUnixTime(item.updatedAt / 1000)) })}
                onSelect={() => setSelectedProject(item)}
              />
            )}
          />
          <Divider marginY={4}/>
          {selectedProject && <SearchableGrid
            data={selectedProject.mixdowns}
            title={t('Select Mixdown')}
            placeholder={t('Search Mixdowns')}
            searchKeys={['name', 'createdAt']}
            render={item => (
              <ClickableTextBox
                key={item.id}
                isSelected={selectedMixdownId === item.id}
                title={item.name || `Version #${item.version}`}
                overline={item.name && `Version #${item.version}`}
                subtext={t('{{time}} ago', { time: formatDistanceToNow(fromUnixTime(item.createdAt / 1000)) })}
                onSelect={() => setSelectedMixdownId(item.id)}
              >
                <Box position={'absolute'} left={4} top={4}>
                  <PreviewPlay size={'xs'} audioUri={item.audio.location}/>
                </Box>
              </ClickableTextBox>
            )}
          />}
          <Divider marginY={4}/>
          <Flex>
            <Button marginRight={4} isFullWidth onClick={onClose}>{t('Cancel')}</Button>
            <Button marginLeft={4} isDisabled={selectedMixdownId === null} isFullWidth
                    onClick={() => onSelectMixdownId(selectedMixdownId)}
                    variantColor={'teal'}>{t('Select Mixdown')}</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AttachMixdownModal;
