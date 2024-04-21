import dotenv from "dotenv";
import * as fs from "fs";
import path from "path";
import getIrys, { token } from "../utils/getIrys";
dotenv.config();

// npx ts-node create-armada-nft-core/upload-image.ts
// https://gateway.irys.xyz/VXyfRi_RdBieQ2vz9iDNNqLiBKjmsTRul3VtrgNeAqU

const upload = async () => {
  const irys = await getIrys();
  const file = path.resolve(__dirname, "./nft-image.png");
  const tag = [{ name: "Content-Type", value: "image/png" }];

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
    const response = await irys.uploadFile(file, {
      tags: tag,
    });
    console.log(`File uploaded ==> https://gateway.irys.xyz/${response.id}`);
  } catch (e) {
    console.log("Error uploading file ", e);
  }
};

upload();
