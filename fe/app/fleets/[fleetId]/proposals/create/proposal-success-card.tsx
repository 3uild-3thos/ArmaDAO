import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XIcon } from "lucide-react";

interface IProposalSuccessCardComponent {
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ProposalSuccessCardComponent = ({
  onClose,
}: IProposalSuccessCardComponent) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center w-screen h-screen bg-black/50 backdrop-blur-md">
      <Card className="h-fit w-fit">
        <CardContent className="relative flex flex-col items-center justify-center gap-8 px-16 py-8">
          <Button
            variant={"ghost"}
            className="absolute top-0 right-0 p-0"
            size={"icon"}
            onClick={onClose}
          >
            <XIcon className="w-4 h-4" />
          </Button>
          <CheckCircle className="w-16 h-16 rounded-full bg-magenta-light text-muted-foreground" />
          Fleet Proposal has been successfully created!
        </CardContent>
      </Card>
    </div>
  );
};

export default ProposalSuccessCardComponent;
