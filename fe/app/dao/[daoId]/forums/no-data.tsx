import React from "react";

// components
import { BadgeAlert } from "lucide-react";
import AiSuggestion from "@/forums//ai-suggestion";

function NoData() {
  return (
    <div className="flex flex-col col-span-8 gap-4 min-h-full items-center">
      <BadgeAlert size={50} className="text-gray-500" />
      <p className="text-sm font-medium text-gray-500">
        No current updates and discussions.
      </p>
      <AiSuggestion suggestion="Create a discussion to your community" />
    </div>
  );
}

export default NoData;
