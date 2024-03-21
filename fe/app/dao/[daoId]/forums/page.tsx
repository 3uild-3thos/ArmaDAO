import React from "react";

// mock
import { threads } from "@/mock/threads";

// components
import { ChevronUp, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import CommentsList from "@/forums/comments-list";
import AiSuggestion from "@/forums/ai-suggestion";
import Stats from "@/forums/stats";
import NoData from "@/forums/no-data";

function DAOForumPage() {
  if (threads.length === 0) {
    return (
      <div className="grid grid-cols-12">
        <NoData />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-8 gap-4">
        <AiSuggestion suggestion="Create a discussion to your community" />
        {threads.map((thread) => {
          return (
            <div className="flex gap-1 p-4" key={thread.id}>
              <div className="p-2">
                <div className="h-4 w-4 bg-cyan-200 rounded-full"></div>
              </div>

              <div className="flex gap-4 flex-col border border-gray-600 p-4 rounded-xl ">
                <div className="flex items-center justify-between">
                  <div className="bg-gray-800 w-fit py-2 px-4 rounded-3xl">
                    <p className="text-xs font-medium">{thread.type}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{thread.createdAt}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-medium">{thread.title}</p>
                    {/* TODO: Add appropriate icon */}
                    {/* TODO: Add appropriate color */}
                    <Pencil size={16} />
                  </div>
                  <p className="text-s m font-normal">{thread.description}</p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-[10px]">
                        {thread.updatedAt}
                      </p>

                      <div className="flex gap-1 items-center">
                        <p className="text-[10px]">Hide changes</p>
                        <ChevronUp size={16} />
                      </div>
                    </div>

                    <div className="bg-gray-700 p-3 flex flex-col gap-2">
                      <p className="text-gray-400 text-sm font-medium">
                        {thread.changesTitle}
                      </p>
                      <p className="text-sm font-normal text-gray-400">
                        Help us not build solar-powered schools for exchange
                        students from outer space! Back our project and get a
                        chance to attend a galactic graduation party with alien
                        DJs and zero-gravity dance-offs!
                      </p>
                    </div>
                  </div>
                </div>

                <Stats
                  like={thread.like}
                  dislike={thread.dislike}
                  comment={thread.comment}
                />
                {/* TODO: Add mock data */}
                <CommentsList comments={thread.comments} />
                {/* TODO: Add approriate design for adding comments */}
                <Input />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DAOForumPage;
