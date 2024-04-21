import Irys from "@irys/sdk";

export const token = "solana";

// Returns a reference to an Irys node
const getIrys = async () => {
  const url = "https://devnet.irys.xyz"; // Devnet
  const providerUrl = "https://api.devnet.solana.com"; // Devnet

  // const url = "https://node2.irys.xyz"; // Mainnet
  // const providerUrl = "https://api.mainnet-beta.solana.com"; // Mainnet

  console.log(`Uploading to ${url} using ${providerUrl}`);

  const irys = new Irys({
    url, // URL of the node you want to connect to
    token, // Token used for payment
    key: process.env.WALLET_PRIVKEY, // ETH or SOL private key
    config: { providerUrl: providerUrl }, // Optional provider URL, only required when using Devnet
  });
  return irys;
};

export default getIrys;
