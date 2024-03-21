import React from "react";

// components
import { ChevronDown, ChevronUp, MessageSquareMore } from "lucide-react";

interface IStatsProps {
  like: number;
  dislike: number;
  comment: number;
}

function Stats({ like, dislike, comment }: IStatsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <ChevronUp size={16} />
          <p className="font-medium text-xs">Like</p>
          <p className="font-medium text-xs text-gray-500">{like}</p>
        </div>
        <div className="flex items-center gap-3">
          <ChevronDown size={16} />
          <p className="font-medium text-xs">Dislike</p>
          <p className="font-medium text-xs text-gray-500">{dislike}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* TODO: Add appropriate icon */}
        <MessageSquareMore size={18} fill="white" stroke="black" />
        <div className="flex items-center gap-1">
          <p className="font-medium text-xs">Comments</p>
          <p className="font-medium text-xs text-gray-500">{comment}</p>
        </div>

        <ChevronUp size={16} />
      </div>
    </div>
  );
}

export default Stats;
