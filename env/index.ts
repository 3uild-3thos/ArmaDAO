import { Cluster, Connection, clusterApiUrl } from "@solana/web3.js";

export const NEXT_PUBLIC_PROPOSAL_ID: string =
  process.env.NEXT_PUBLIC_PROPOSAL_ID ??
  "propm845StqEBV57ZSnTe8EW8duzAxo5p7h4inhibXV";

export const NEXT_PUBLIC_STAKING_ID: string =
  process.env.NEXT_PUBLIC_STAKING_ID ??
  "stakyTBmEpbUcxNhjiv16Bvr53RVy68ENBZXPiUzNcF";

export const NEXT_PUBLIC_DAO_ID: string =
  process.env.NEXT_PUBLIC_DAO_ID ??
  "daoSYkGVA6pu5CxknvVMMTc8nFAGsYzfQt2jK5CgC5V";

export const NEXT_PUBLIC_VOTING_ID: string =
  process.env.NEXT_PUBLIC_VOTING_ID ??
  "voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC";

export const NEXT_PUBLIC_CLUSTER: Cluster = (process.env.NEXT_PUBLIC_CLUSTER ??
  "devnet") as Cluster;

export const NEXT_PUBLIC_RPC_URL =
  process.env.NEXT_PUBLIC_RPC_URL ?? clusterApiUrl(NEXT_PUBLIC_CLUSTER);

export const CONNECTION: Connection = new Connection(
  NEXT_PUBLIC_RPC_URL,
  "finalized"
);
