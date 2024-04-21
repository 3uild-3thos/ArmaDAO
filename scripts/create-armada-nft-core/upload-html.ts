import dotenv from "dotenv";
import * as fs from "fs";
import path from "path";
import getIrys, { token } from "../utils/getIrys";
dotenv.config();

// npx ts-node create-armada-nft-core/upload-html.ts
// https://gateway.irys.xyz/Iohj89IpfhWp2X7Gph6_ktpkk3VkRY_Qi_bNL8h4miM

const upload = async () => {
  const irys = await getIrys();
  const file = path.resolve(__dirname, "./armada.html");

  // Get size of file
  const { size } = await fs.promises.stat(file);

  // Get cost to upload "size" bytes
  console.log("Calculating price...");
  const price = await irys.getPrice(size);

  // Fund the node
  console.log(
    `Funding node with ${size} bytes costs ${irys.utils.fromAtomic(
      price
    )} ${token}`
  );

  await irys.fund(price);

  // Upload metadata
  try {
    console.log(`Uploading file...`);
    const response = await irys.uploadFile(file);
    console.log(`File uploaded ==> https://gateway.irys.xyz/${response.id}`);
  } catch (e) {
    console.log("Error uploading file ", e);
  }
};

upload();
