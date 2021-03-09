import { Td, Tr } from '@chakra-ui/react';
import React, { CSSProperties } from "react";
import { formatBytesForDisplay } from '../../../utils/binary';
import {format} from 'date-fns';
import { TiDelete } from "react-icons/all";

interface Props {
  file: File;
  style?: CSSProperties;
}

const FileRow: React.FC<Props> = ({file, style}) => {
  return (
    <Tr style={style}>
      <Td isTruncated>
        {file.name}
      </Td>
      <Td>
        {formatBytesForDisplay(file.size, 2)}
      </Td>
      <Td>
        {format(file.lastModified, 'yyyy-MM-dd HH:mm:ss')}
      </Td>
      <Td>

      </Td>
    </Tr>
  );
};

export default FileRow;
