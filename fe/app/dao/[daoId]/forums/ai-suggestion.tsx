import { Sparkles } from "lucide-react";
import React from "react";

interface IAiSuggestionProps {
  suggestion: string;
}

function AiSuggestion({ suggestion }: IAiSuggestionProps) {
  return (
    <div className="bg-purple-900 px-3 py-1 rounded-3xl flex items-center gap-2">
      {/* TODO: Add appropriate fill color */}
      <Sparkles size={15} fill="bg-pink-900" />
      <p className="text-sm font-medium">
        AI Suggestion:{" "}
        <span className="text-gray-300 font-normal">{suggestion}</span>
      </p>
    </div>
  );
}

export default AiSuggestion;
