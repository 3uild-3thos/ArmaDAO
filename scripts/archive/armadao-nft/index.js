const { writeFileSync, copyFile } = require("fs");

const path = "./assets/";

const INSTANCES = 100;

for (let i = 0; i < INSTANCES; i++) {
  copyFile(`./images/${0}.png`, `./assets/${i}.png`, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
  writeFileSync(
    `${path}${i}.json`,
    JSON.stringify(
      {
        name: `ARMADAO Mothership #${i + 1}`,
        symbol: "ARMADAO",
        description: `The ARAMADAO Mothership NFT #${i + 1}.`,
        image: `${i}.png`,
        attributes: [
          {
            trait_type: "Number",
            value: `${i}`,
          },
        ],
        properties: {
          files: [
            {
              uri: `${i}.png`,
              type: "image/png",
            },
          ],
        },
      },
      null,
      2
    ),
    "utf8"
  );
}
try {
  copyFile("./images/0.png", `./assets/collection.png`, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
  writeFileSync(
    `./assets/collection.json`,
    JSON.stringify(
      {
        name: `ARMADAO Mothership #${0}`,
        symbol: "ARMADAO",
        description: `The ARAMADAO Mothership NFT #0`,
        image: `collection.png`,
        properties: {
          files: [
            {
              uri: `collection.png`,
              type: "image/png",
            },
          ],
        },
      },
      null,
      2
    ),
    "utf8"
  );
  console.log("Data successfully saved to disk");
} catch (error) {
  console.log("An error has occurred ", error);
}
