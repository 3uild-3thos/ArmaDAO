import LabelValue from "@/components/ui/label-value";
import { cn } from "@/lib/utils";

const DAOInfoComponent = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="text-4xl text-muted">Armada</div>
          <div className="text-xl text-muted-light">by Turbin3</div>
        </div>
        {/* Socials */}
        <div className=""></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <LabelValue label="Membership Type" value="NFT" />
        <LabelValue label="Mint Address" value="4Sv...D3k" href="#" />
        <LabelValue label="Deck" value="Link" href="#" />
        <LabelValue label="Total Proposals" value={5555} />
        <LabelValue label="Total Forums" value={666} />
      </div>
      <div className="text-muted-light text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        suscipit odit! Voluptates quae voluptas, cum iure labore voluptate sit
        beatae dolores consequuntur, architecto inventore saepe delectus
        mollitia cumque! Amet.
      </div>
    </div>
  );
};

export default DAOInfoComponent;
