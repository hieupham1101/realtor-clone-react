export const getFilePreview = (selectedFile) => {
  if (!selectedFile) return;

  const objectUrl = URL.createObjectURL(selectedFile);
  return objectUrl;
};
