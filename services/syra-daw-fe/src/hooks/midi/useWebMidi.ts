import useWebMidiListener from "./useWebMidiListener";
import useListenForExternalMidiIn from "./useListenForExternalMidiIn";
import useUpdateMidiStore from "./useUpdateMidiStore";

export default function useWebMidi() {
  useWebMidiListener();
  useListenForExternalMidiIn(useUpdateMidiStore());
}