// TODO: REFERENCE FOR SOLANA INTERACTION
// "use client";
// import { Button, InputField } from "@/components";
// import { CONNECTION } from "@/env";
// import {
//   getDaoAuth,
//   getDaoConfigKey,
//   initializeDaoProgram,
// } from "@/programs/dao";
// import { initializeProposalProgram } from "@/programs/proposal";
// import {
//   getVotingAuthKey,
//   getVotingConfigKey,
//   initializeVotingProgram,
// } from "@/programs/voting";
// import { createTransaction } from "@/utils";
// import { AnchorProvider, BN } from "@coral-xyz/anchor";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { Keypair, PublicKey } from "@solana/web3.js";
// import { randomBytes } from "crypto";
// import { useEffect } from "react";
// require("@solana/wallet-adapter-react-ui/styles.css");

// export default function Home() {
//   const { publicKey, sendTransaction } = useWallet();

//   useEffect(() => {
//     create();
//   }, []);

//   const create = async () => {
//     const { solana } = window as any;
//     const provider = new AnchorProvider(CONNECTION, solana, {
//       commitment: "finalized",
//     });
//     const daoConfig = Keypair.generate();
//     const daoConfigKey = getDaoConfigKey(daoConfig.publicKey);
//     const daoAuthKey = getDaoAuth(daoConfigKey);
//     const daoTeasury = getDaoAuth(daoConfigKey);

//     const votingConfig = Keypair.generate();
//     const votingConfigKey = getVotingConfigKey(votingConfig.publicKey);
//     const votingAuthKey = getVotingAuthKey(votingConfigKey);

//     const proposalKeypair = Keypair.generate();
//     const votingKeypair = Keypair.generate();
//     const stakingKeypair = Keypair.generate();
//     const daoKeypair = Keypair.generate();
//     const collectionMint = new PublicKey(
//       "9v9gYTGVaY7f5RXwHNPd7yMdKJ98HWaq456G6HeaShVA"
//     );

//     const instructions = [
//       await initializeVotingProgram(
//         provider,
//         [votingConfig.publicKey.toBuffer()],
//         stakingKeypair.publicKey,
//         proposalKeypair.publicKey,
//         votingConfigKey,
//         votingAuthKey
//       ),
//       await initializeProposalProgram(
//         provider,
//         [daoConfig.publicKey.toBuffer()],
//         stakingKeypair.publicKey,
//         daoKeypair.publicKey
//       ),
//       await initializeDaoProgram(
//         provider,
//         [daoConfig.publicKey.toBuffer()],
//         1,
//         1,
//         1,
//         1,
//         1,
//         1,
//         proposalKeypair.publicKey,
//         votingKeypair.publicKey,
//         stakingKeypair.publicKey,
//         collectionMint,
//         daoAuthKey,
//         daoTeasury,
//         daoConfigKey
//       ),
//     ];
//     console.log(
//       await sendTransaction(await createTransaction(instructions), CONNECTION)
//     );
//   };

//   return (
//     <>
//       <InputField name="proposalFee" title="Proposal Fee" type="number" />
//       <InputField name="minQuorum" title="Minimum Quorum" type="number" />
//       <InputField name="minTreshold" title="Minimum Treshold" type="number" />
//       <InputField name="maxExpiry" title="Maximum Expiry" type="number" />
//       <InputField name="minStake" title="Minimum Stake" type="number" />
//       <InputField
//         name="minPrevotingPeriod"
//         title="Minimum Pre-voting Period"
//         type="number"
//       />
//       <Button onClick={create}>Create DAO</Button>
//     </>
//   );
// }
