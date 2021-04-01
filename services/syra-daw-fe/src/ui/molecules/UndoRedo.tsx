import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import useUndoRedo from "../../hooks/recoil/useUndoRedo";

interface Props {

}

const UndoRedo: React.FC<Props> = () => {
  const {hasUndoStack, hasRedoStack, undo, redo} = useUndoRedo();

  return (
    <Flex align={'center'}>
      <IconButton
        icon={<BiUndo />}
        size={'sm'}
        aria-label={`Undo last action`}
        title={`Undo last action`}
        colorScheme={'gray'}
        disabled={!hasUndoStack}
        onClick={undo}
      />
      <IconButton
        icon={<BiRedo />}
        size={'sm'}
        aria-label={`Redo last undone action`}
        title={`Redo last undone action`}
        colorScheme={'gray'}
        disabled={!hasRedoStack}
        onClick={redo}
      />
    </Flex>
  );
};

export default UndoRedo;
