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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <LabelValue label="Membership Type" value="NFT" />
        <LabelValue label="Deck" value="Link" href="#" />
        <LabelValue label="Unique Holders" value={1234} />
        <LabelValue label="Min. Quorum" value={1234} />
        <LabelValue label="Min. Threshold" value={5555} />
        <LabelValue label="Max Expiry" value={666} />
      </div>
      <div className="text-lg text-muted-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        suscipit odit! Voluptates quae voluptas, cum iure labore voluptate sit
        beatae dolores consequuntur, architecto inventore saepe delectus
        mollitia cumque! Amet.
      </div>
    </div>
  );
};

export default DAOInfoComponent;
