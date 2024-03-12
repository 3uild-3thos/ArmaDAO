import LabelValue from "@/components/ui/label-value";
import { cn } from "@/lib/utils";

const DAOStatsComponent = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col gap-2">
        <div className="text-4xl text-muted">3,500 staked</div>
        <div className="text-xl text-muted-light">out of 6,969 NFTs</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <LabelValue label="Unique Holders" value={1234} />
        <LabelValue label="Min. Quorum" value={1234} />
        <LabelValue label="Min. Threshold" value={5555} />
        <LabelValue label="Max Expiry" value={666} />
      </div>
    </div>
  );
};

export default DAOStatsComponent;
