import { Table, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from "react";
import useAggregateProjectFiles from "../../../hooks/core/useAggregateProjectFiles";
import FileRow from './FileRow';

interface Props {

}

const FileTable: React.FC<Props> = ({}) => {
  const {isReady, localFiles, serverFiles} = useAggregateProjectFiles();

  return (
    <Table ml={-6} width={'calc(100% + var(--chakra-space-12))'} variant="striped" colorScheme="teal" size={'sm'}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Size</Th>
          <Th>Created At</Th>
          <Th>&nbsp;</Th>
        </Tr>
      </Thead>
      <Tbody>
        {isReady && localFiles.map((file, i) => <FileRow file={file} key={i} />)}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Name</Th>
          <Th>Size</Th>
          <Th>Created At</Th>
          <Th>&nbsp;</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default FileTable;
