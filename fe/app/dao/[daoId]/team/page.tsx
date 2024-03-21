import React from "react";
import AiSuggestion from "./ai-suggestion";
import { EyeOff } from "lucide-react";

function DAOTeamPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-4 min-h-full items-center">
        {/* TODO: Add appropriate icon */}
        <EyeOff size={50} className="text-gray-500" />
        <p className="text-sm font-medium text-gray-500">
          The team chose to be Anonymous.
        </p>
        <AiSuggestion suggestion="Doxed team get a 37% more funding than anonymous teams." />
      </div>
    </div>
  );
}

export default DAOTeamPage;
