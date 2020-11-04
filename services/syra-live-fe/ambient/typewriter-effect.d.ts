declare module 'typewriter-effect' {
  export interface Options {
    strings: Array<string>,
    cursor?: string,
    delay?: 'natural' | number,
    deleteSpeed?: 'natural' | number,
    loop?: boolean,
    autoStart?: boolean,
    devMode?: boolean,
    wrapperClassName?: string,
    cursorClassName?: string,
  }

  interface Props {
    options: Options;
  }

  const Typewriter: React.FC<Props> = (props) => JSX.Element | null;
  export default Typewriter;
}