const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve((reader.result as string) || "");
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
      reject(error);
    };
  });
};

export default getBase64;
