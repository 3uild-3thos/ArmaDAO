// components
import { Card, CardContent } from "@/components/ui/card";

// lib

interface IProposalResultsComponent {}

const ProposalResultsComponent = ({}: IProposalResultsComponent) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-8 text-muted">
        <div className="text-xl font-medium">Live Results</div>
        <div className="flex flex-col gap-4">
          {/* TODO: Create component for the results graph */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalResultsComponent;
