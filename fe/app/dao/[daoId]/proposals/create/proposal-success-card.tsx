import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XIcon } from "lucide-react";

interface IProposalSuccessCardComponent {
  onClose: () => void;
}

const ProposalSuccessCardComponent = ({
  onClose,
}: IProposalSuccessCardComponent) => {
  return (
    <div className="bg-black/50 backdrop-blur-md z-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen h-screen">
      <Card className="h-fit w-fit">
        <CardContent className="relative flex flex-col items-center justify-center px-16 py-8 gap-8">
          <Button
            variant={"ghost"}
            className="absolute right-0 top-0 p-0"
            size={"icon"}
            onClick={onClose}
          >
            <XIcon className="h-4 w-4" />
          </Button>
          <CheckCircle className="bg-cyan rounded-full text-muted-foreground h-16 w-16" />
          Fleet Proposal has been successfully created!
        </CardContent>
      </Card>
    </div>
  );
};

export default ProposalSuccessCardComponent;
