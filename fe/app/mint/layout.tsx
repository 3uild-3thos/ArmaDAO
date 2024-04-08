import { ReactNode } from "react";

const MintLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full min-h-screen px-8 py-56 md:py-48 font-gordita md:px-16 lg:px-32 2xl:px-64">
      {children}
    </div>
  );
};

export default MintLayout;
