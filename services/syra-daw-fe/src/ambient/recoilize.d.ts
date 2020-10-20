declare module 'recoilize' {
  import { RecoilState, RecoilValueReadOnly } from 'recoil';

  type Recoils = RecoilState<any> | RecoilValueReadOnly<any>;

  interface Props {
    nodes: Recoils[];
    root: HTMLElement | null;
  }

  const RecoilizeDebugger: React.FC<Props> = (props) => JSX.Element | null;
  export = RecoilizeDebugger;
}