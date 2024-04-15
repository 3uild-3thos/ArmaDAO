export enum EMintStatus {
  MINT_LIVE = "Mint Live",
  MINT_PAUSED = "Mint Paused",
}

interface IMintStatus {
  status: EMintStatus;
}

const MintStatus = ({ status }: IMintStatus) => {
  switch (status) {
    case EMintStatus.MINT_PAUSED:
      return (
        <div className="text-destructive flex gap-2 items-center">
          <div className="animate-pulse mb-1 blur-[1px] w-4 h-4 rounded-full bg-destructive p-2" />
          Mint Paused
        </div>
      );
    default:
    case EMintStatus.MINT_LIVE:
      return (
        <div className="text-success flex gap-2 items-center">
          <div className="animate-pulse mb-1 blur-[1px] w-4 h-4 rounded-full bg-success p-2" />
          Mint Live
        </div>
      );
  }
  return <div>MintStatus</div>;
};

export default MintStatus;
