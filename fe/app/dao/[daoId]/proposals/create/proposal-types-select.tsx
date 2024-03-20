import { Button } from "@/components/ui/button";
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
            "flex flex-col justify-start hover:bg-gray-400/5 w-32 gap-4 h-32 break-words text-wrap p-8 rounded-xl border-default"
          )}
          onClick={(event) => handleTypeSelect(event, type)}
        >
          <div
            className={cn(
              "rounded-full w-4 h-4 p-2",
              selected === type && "bg-cyan",
              selected !== type && "border-default"
            )}
          />
          <div className="text-muted">{type}</div>
        </Button>
      ))}
    </div>
  );
};

export default ProposalTypesSelectComponent;
