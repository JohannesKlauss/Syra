import React from "react";
import { projectStore } from "../../recoil/projectStore";
import { useRecoilValue } from "recoil";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import Editor from "../organisms/Editor";
import LoadSession from "../organisms/LoadSession";
import { useParams } from "react-router-dom";

const EditorShell: React.FC = () => {
  const id = useRecoilValue(projectStore.id);
  const isSetupFinished = useRecoilValue(projectStore.isSetupFinished);

  const { id: urlId } = useParams<{id: string}>();
  const lastProjectId = window.localStorage.getItem("projectId");
  const doesIdExist = !((id == null || id.length === 0) && lastProjectId === null && (urlId == null || urlId.length === 0));

  if (doesIdExist && id?.length > 0 && isSetupFinished) {
    // If the id is set inside recoil everything is up and ready and loaded, so we open the editor.
    return <Editor/>;
  } else if (doesIdExist) {
    // If the id is not set, but we have a url id or locale storage id we load the session.
    return <LoadSession/>;
  }

  // If we have no ID at all (which should not happen), we display an error.
  return (
    <Modal onClose={() => null} isOpen={true} isCentered>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>S Y R A - No Session found!</ModalHeader>
        <ModalBody>
          <Text>Please provide a valid session id.</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditorShell;
