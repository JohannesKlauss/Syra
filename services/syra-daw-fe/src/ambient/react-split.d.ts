declare module 'react-split' {
  type Props = {
    sizes?: ReadonlyArray<number>;
    minSize?: number | ReadonlyArray<number>,
    expandToMin?: boolean;
    gutterSize?: number,
    gutterAlign?: 'left' | 'right' | 'top' | 'bottom' | 'center';
    gutterStyle?: (dimension: number, gutterSize: number, index: number) => Record;
    snapOffset?: number;
    dragInterval?: 1,
    cursor?: string;
    direction?: 'horizontal' | 'vertical';
  };

  const Split: React.FC<Props> = (props) => JSX.Element | null;
  export default Split;
}