import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TargetIcon } from "lucide-react";

interface IProposalDateComponent {
  startDate: string;
  endDate: string;
}

const ProposalDateComponent = ({
  startDate,
  endDate,
}: IProposalDateComponent) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-8 text-muted">
        <div className="text-2xl">Date</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-base">
            <Calendar size={16} /> Start: {startDate}
          </div>
          <div className="flex items-center gap-2 text-base">
            <TargetIcon size={16} /> End: {endDate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProposalDateComponent;
