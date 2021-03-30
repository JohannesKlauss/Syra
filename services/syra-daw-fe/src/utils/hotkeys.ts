export default function encapsulateHotkeysCallback(callback: CallableFunction) {
  return (e: KeyboardEvent) => {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    callback(e);
  }
}