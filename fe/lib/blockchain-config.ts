import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection, clusterApiUrl } from "@solana/web3.js";

interface IConfig {
  proposalProgram: string;
  stakingProgram: string;
  daoProgram: string;
  votingProgram: string;
  armadaNftUri: string;
  armadaNftPrice: number;
  cluster: WalletAdapterNetwork;
  rpcUrl: string;
  connection: Connection;
}

interface IBlockchainConfig {
  [key: string]: IConfig;
}
const config: IBlockchainConfig = {
  devnet: {
    proposalProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    stakingProgram: "stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF",
    daoProgram: "daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V",
    votingProgram: "voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC",
    armadaNftUri:
      process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_URI ??
      "https://gateway.irys.xyz/YYEDwDeN1CYGp6Z1fbqx1W2w1ZDNu9xXeY8v-8_iKgE",
    armadaNftPrice: Number(process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_PRICE ?? 1),
    cluster: WalletAdapterNetwork.Devnet,
    rpcUrl: clusterApiUrl(WalletAdapterNetwork.Devnet),
    connection: new Connection(
      clusterApiUrl(WalletAdapterNetwork.Devnet),
      "finalized"
    ),
  },
  mainnet: {
    proposalProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    stakingProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    daoProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    votingProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    armadaNftUri:
      process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_URI ??
      "https://gateway.irys.xyz/YYEDwDeN1CYGp6Z1fbqx1W2w1ZDNu9xXeY8v-8_iKgE",
    armadaNftPrice: Number(process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_PRICE ?? 1),
    cluster: WalletAdapterNetwork.Devnet,
    rpcUrl: clusterApiUrl(WalletAdapterNetwork.Devnet),
    connection: new Connection(
      clusterApiUrl(WalletAdapterNetwork.Devnet),
      "finalized"
    ),
  },
};

const getConfig = () => {
  const env =
    process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === "mainnet" ? "mainnet" : "devnet";
  return config[env] as IConfig;
};

export default getConfig;
