import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { editorStore } from '../../../../../recoil/editorStore';
import { useRecoilState } from 'recoil';
import FileTable from '../../../../molecules/FileExplorer/FileTable';
import ConfirmationModal from '../../../../atoms/ConfirmationModal';
import { AiTwotoneDelete } from 'react-icons/all';

interface Props {}

const FileExplorer: React.FC<Props> = () => {
  const [showFileExplorer, setShowFileExplorer] = useRecoilState(editorStore.showFileExplorer);

  const { onOpen, isOpen } = useDisclosure();

  const onClose = (confirmed?: boolean) => {};

  return (
    <>
      <Drawer
        isOpen={showFileExplorer}
        placement="right"
        onClose={() => setShowFileExplorer(false)}
        size={'lg'}
        isFullHeight
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Project Files</DrawerHeader>

          <DrawerBody>
            <FileTable />
          </DrawerBody>

          <DrawerFooter>
            <IconButton
              icon={<AiTwotoneDelete />}
              aria-label={'Delete selected files'}
              title={'Delete selected files.'}
              colorScheme="red"
              mr={2}
            />
            <Button colorScheme="teal">Synchronize</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} title={'Delete Files?'} />
    </>
  );
};

export default FileExplorer;
