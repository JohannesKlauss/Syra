export default function readFile(file): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.addEventListener('load', () => resolve(reader.result as string), false);
    reader.readAsDataURL(file);
  });
}