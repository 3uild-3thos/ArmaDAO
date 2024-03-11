import { cn } from "@/lib/utils";

const DAOInfoComponent = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="">DAO Name</div>
      <div className="">DAO Name</div>
    </div>
  );
};

export default DAOInfoComponent;
