import React from "react";
import { EyeOff } from "lucide-react";
import AiSuggestion from "./ai-suggestion";

function Nodata() {
  return (
    <>
      {/* TODO: Add appropriate icon */}
      <EyeOff size={50} className="text-gray-500" />
      <p className="text-sm font-medium text-gray-500">
        The team chose to be Anonymous.
      </p>
      <AiSuggestion suggestion="Doxed team get a 37% more funding than anonymous teams." />
    </>
  );
}

export default Nodata;
