import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection, clusterApiUrl } from "@solana/web3.js";

interface IConfig {
  proposalProgram: string;
  stakingProgram: string;
  daoProgram: string;
  votingProgram: string;
  armadaNftCreator: string;
  armadaNftUri: string;
  armadaNftPrice: number;
  cluster: WalletAdapterNetwork;
  rpcUrl: string;
  connection: Connection;
  armadaNftAddress: string;
}

interface IBlockchainConfig {
  [key: string]: IConfig;
}

const config: IBlockchainConfig = {
  devnet: {
    cluster: WalletAdapterNetwork.Devnet,
    rpcUrl:
      process.env.NEXT_PUBLIC_DEVNET_RPC_URL ||
      clusterApiUrl(WalletAdapterNetwork.Devnet),
    connection: new Connection(
      process.env.NEXT_PUBLIC_DEVNET_RPC_URL ||
        clusterApiUrl(WalletAdapterNetwork.Devnet),
      "finalized"
    ),
    armadaNftCreator: "EAxH8ovue9FC2e95UTYjM6vsNtrrqW4LMFSjmsH2hd39",
    armadaNftUri:
      process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_URI ??
      "https://gateway.irys.xyz/k8YU70kHYlRNatykdhbN9OXvsqfbZw_tEaxmdpvm4n8",
    armadaNftPrice: Number(process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_PRICE ?? 1),
    proposalProgram: "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV",
    stakingProgram: "stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF",
    daoProgram: "daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V",
    votingProgram: "voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC",
    armadaNftAddress: "6PKWbigBGxbAAJnv42L5BDsTymoaFYMWaQXxveMmxs3o",
  },
  mainnet: {
    cluster: WalletAdapterNetwork.Mainnet,
    rpcUrl:
      process.env.NEXT_PUBLIC_MAINNET_RPC_URL ||
      clusterApiUrl(WalletAdapterNetwork.Mainnet),
    connection: new Connection(
      process.env.NEXT_PUBLIC_MAINNET_RPC_URL ||
        clusterApiUrl(WalletAdapterNetwork.Mainnet),
      "finalized"
    ),
    armadaNftCreator: "",
    armadaNftUri:
      process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_URI ??
      "https://gateway.irys.xyz/k8YU70kHYlRNatykdhbN9OXvsqfbZw_tEaxmdpvm4n8", // TODO: Update to multisig treasury on mainnet
    armadaNftPrice: Number(process.env.NEXT_PUBLIC_ARMADA_NFT_IRYS_PRICE ?? 1),
    proposalProgram: "",
    stakingProgram: "",
    daoProgram: "",
    votingProgram: "",
    armadaNftAddress: "",
  },
};

const getConfig = () => {
  const env =
    process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === "mainnet" ? "mainnet" : "devnet";
  return config[env] as IConfig;
};

export default getConfig;
