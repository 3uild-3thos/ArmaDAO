// components
import CreateFleetStepper from "@/app/dao/create/(stepper)/stepper";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-medium text-3xl">Create a Fleet DAO</p>

      <div className="grid grid-cols-3 p-5 gap-10">
        <CreateFleetStepper />
        <div className="col-span-2 flex flex-col gap-10">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
