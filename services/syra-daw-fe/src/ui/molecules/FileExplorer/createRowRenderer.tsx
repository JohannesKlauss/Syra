import FileRow from './FileRow';
import { ListRowRenderer } from "react-virtualized";

export const createRowRenderer = (files: File[]): ListRowRenderer => ({
  key,
  index,
  style,
}) => {
  return <FileRow key={key} file={files[index]} style={style}/>;
};
