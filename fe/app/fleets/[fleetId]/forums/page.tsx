"use client";

// mock
import { threads } from "@/mock/threads";

// components
import { ChevronUp, Pencil } from "lucide-react";

import CommentsList from "@/app/fleets/[fleetId]/forums/comments-list";
import NoData from "@/app/fleets/[fleetId]/forums/no-data";
import Stats from "@/app/fleets/[fleetId]/forums/stats";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function FleetForumPage() {
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
        {threads.map((thread) => {
          return (
            <div className="flex gap-1 p-4" key={thread.id}>
              <div className="p-2">
                <div className="w-4 h-4 rounded-full bg-cyan-200"></div>
              </div>

              <div className="flex flex-col gap-4 p-4 border border-gray-600 rounded-xl ">
                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 bg-gray-800 w-fit rounded-3xl">
                    <p className="text-xs font-medium">{thread.type}</p>
                  </div>
                  <p className="text-xs text-gray-500">{thread.createdAt}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-medium">{thread.title}</p>
                    {/* TODO: Add appropriate icon */}
                    {/* TODO: Add appropriate color */}
                    <Button
                      variant={"ghost"}
                      className="gap-2 p-0"
                      onClick={() => {
                        alert("Edit");
                      }}
                    >
                      <Pencil size={16} />
                    </Button>
                  </div>
                  <p className="font-normal text-s m">{thread.description}</p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-[10px]">
                        Updated {new Date(thread.updatedAt).toUTCString()}
                      </p>
                      <Button
                        variant={"ghost"}
                        className="gap-2 p-0"
                        onClick={() => {
                          alert("Hide changes");
                        }}
                      >
                        <p className="text-[10px]">Hide changes</p>
                        <ChevronUp size={16} />
                      </Button>
                    </div>

                    <div className="flex flex-col gap-2 p-3 bg-gray-700">
                      <p className="text-sm font-medium text-gray-400">
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

export default FleetForumPage;
