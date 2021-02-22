import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure
} from "@chakra-ui/react";
import { useForm, FormProvider } from 'react-hook-form';
import FileInput from '../../atoms/Form/FileInput';
import axios from "axios";
import { useCreateIssueMutation } from "../../../gql/generated";

type TReportIssueForm = {
  description: string;
  files: File[];
};

const ReportIssue: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSending, setIsSending] = useState(false);
  const [executeMutation] = useCreateIssueMutation();
  const methods = useForm<TReportIssueForm>();

  const onSubmit = async (data: TReportIssueForm) => {
    setIsSending(true);
    let screenshotIds: string[] = [];

    if (data.files) {
      const images = new FormData();
      data.files.forEach(file => images.append('file', file));

      const res = await axios.post(`${process.env.REACT_APP_LIVE_GQL_URL}/files/upload`, images, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
        withCredentials: true,
      });

      if (res.status === 201) {
        screenshotIds = res.data.map((file: { id: any }) => file.id);
      }
    }

    const res = await executeMutation({
      variables: {
        description: data.description,
        screenshotIds,
      }
    });

    setIsSending(false);

    if (res.errors === undefined) {
      onClose();


    }
  };

  return (
    <>
      <Button size={'sm'} colorScheme={'gray'} onClick={onOpen}>
        Report issue
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Report issue</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize={'sm'}>
                  Syra is in its early stages, so bugs are inevitable. If you found a problem or feel that somethings off,
                  please report it to us.
                </Text>

                <FormControl isRequired marginY={4}>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea id={'description'} ref={methods.register} name={'description'} />
                  <FormHelperText id="accessCode-helper-text">
                    Please describe the issue or bug you are facing as detailed as possible.
                  </FormHelperText>
                </FormControl>
                <FileInput name={'files'} accept={['image/*', 'video/*']} maxSize={30000000} />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="teal" isLoading={isSending} type={'submit'} mr={3}>
                  Send
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default ReportIssue;
