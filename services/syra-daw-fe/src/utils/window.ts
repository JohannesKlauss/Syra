export function updateDocumentTitle(title: string, override?: boolean) {
  document.title = override ? title : `S Y R A - ${title}`;
}