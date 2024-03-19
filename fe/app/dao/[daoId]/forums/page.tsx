import React from "react";

// Components
import { BadgeAlert, Sparkles } from "lucide-react";

function DAOForumPage() {
  return (
    <div className="grid grid-cols-12 mt-20">
      <div className="flex flex-col col-span-8 gap-4 min-h-full items-center">
        <BadgeAlert size={50} className="text-gray-500" />
        <p className="text-sm font-medium text-gray-500">
          No current updates and discussions.
        </p>
        <div className="bg-purple-900 px-3 py-1 rounded-3xl flex items-center gap-2">
          {/* TODO: Add appropriate fill color */}
          <Sparkles size={15} fill="bg-pink-900" />
          <p className="text-sm font-medium">
            AI Suggestion:{" "}
            <span className="text-gray-300 font-normal">
              Create a discussion to your community
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DAOForumPage;
