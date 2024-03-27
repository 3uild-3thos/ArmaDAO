// components
import { Button } from "@/components/ui/button";
import { BadgeCheck, FileTerminal, Gem, SquareStack } from "lucide-react";

// lib
import { EProposalType } from "@/lib/schema/proposals.schema";
import { cn } from "@/lib/utils";

interface IProposalTypesSelectComponent {
  onSelect: (type: EProposalType) => void;
  selected: EProposalType;
}

const ProposalTypesSelectComponent = ({
  onSelect,
  selected,
}: IProposalTypesSelectComponent) => {
  const handleTypeSelect = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: EProposalType
  ) => {
    event.preventDefault();
    onSelect(type);
  };

  return (
    <div className="flex gap-8">
      {Object.values(EProposalType).map((type) => (
        <Button
          key={`proposal-type-${type}`}
          variant={"ghost"}
          className={cn(
            "flex flex-col justify-start hover:bg-gray-400/5 w-28 gap-4 h-28 break-words text-wrap p-4 rounded-xl border-default"
          )}
          onClick={(event) => handleTypeSelect(event, type)}
        >
          {type === EProposalType.VOTE && (
            <>
              {selected === type && (
                <BadgeCheck size={32} className="text-cyan" />
              )}
              {selected !== type && (
                <BadgeCheck size={32} className="text-muted" />
              )}
            </>
          )}

          {type === EProposalType.BOUNTY && (
            <>
              {selected === type && <Gem size={32} className="text-cyan" />}
              {selected !== type && <Gem size={32} className="text-muted" />}
            </>
          )}

          {type === EProposalType.EXECUTABLE && (
            <>
              {selected === type && (
                <FileTerminal size={32} className="text-cyan" />
              )}
              {selected !== type && (
                <FileTerminal size={32} className="text-muted" />
              )}
            </>
          )}

          {type === EProposalType.MULTIPLE_CHOICE && (
            <>
              {selected === type && (
                <SquareStack size={32} className="text-cyan" />
              )}
              {selected !== type && (
                <SquareStack size={32} className="text-muted" />
              )}
            </>
          )}
          <div className="text-muted">{type}</div>
        </Button>
      ))}
    </div>
  );
};

export default ProposalTypesSelectComponent;
