import React from "react";

// Components
import NoData from "@/forums/no-data";
import AiSuggestion from "./ai-suggestion";
import {
  ChevronDown,
  ChevronUp,
  MessageSquareMore,
  Pencil,
  Pin,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

function DAOForumPage() {
  return (
    <div className="grid grid-cols-12">
      {/* TODO: Show NoData if no data in forums */}
      {/* <NoData /> */}

      <div className="flex flex-col col-span-8 gap-4">
        <AiSuggestion suggestion="Create a discussion to your community" />

        <div className="flex gap-1 p-4">
          <div className="p-2">
            <div className="h-4 w-4 bg-cyan-200 rounded-full"></div>
          </div>

          <div className="flex gap-4 flex-col border border-gray-600 p-4 rounded-xl ">
            <div className="flex items-center justify-between">
              <div className="bg-gray-800 w-fit py-2 px-4 rounded-3xl">
                <p className="text-xs font-medium">Update</p>
              </div>
              <p className="text-gray-500 text-xs">December 17, 2023</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-medium">We’re going to the moon!</p>
                {/* TODO: Add appropriate icon */}
                {/* TODO: Add appropriate color */}
                <Pencil size={16} />
              </div>
              <p className="text-s m font-normal">
                Help us build solar-powered schools for exchange students from
                outer space! Back our project and get a chance to attend a
                galactic graduation party with alien DJs and zero-gravity
                dance-offs!
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-[10px]">
                    Updated December 23, 2022 ∙ 12:51 PM UTC
                  </p>

                  <div className="flex gap-1 items-center">
                    <p className="text-[10px]">Hide changes</p>
                    <ChevronUp size={16} />
                  </div>
                </div>

                <div className="bg-gray-700 p-3 flex flex-col gap-2">
                  <p className="text-gray-400 text-sm font-medium">
                    We’re going to the mars!
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Help us not build solar-powered schools for exchange
                    students from outer space! Back our project and get a chance
                    to attend a galactic graduation party with alien DJs and
                    zero-gravity dance-offs!
                  </p>
                </div>
              </div>
            </div>

            <Stats />
            {/* TODO: Add mock data */}
            <CommentsList comments={[1, 2, 3]} />
            {/* TODO: Add approriate design for adding comments */}
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DAOForumPage;

interface ICommentsListProps {
  // TODO: update types
  comments?: any[];
}
function CommentsList({ comments = [] }: ICommentsListProps) {
  return (
    <div className="border border-gray-600 p-2 rounded ">
      {/* TODO: Add data type for comments */}
      {comments.map((e) => (
        <Comment
          key={e}
          createdAt="a minute ago"
          pinned={true}
          content="Disclaimer: this is a dream of us, don’t take it literally."
        />
      ))}
      <div className="flex items-center justify-center p-2 gap-3">
        <ChevronDown size={16} />
        <p className="text-xs">Load more comments</p>
      </div>
    </div>
  );
}

interface ICommentProps {
  content: string;
  pinned?: boolean;
  createdAt: string;
}

function Comment({ content, pinned = false, createdAt }: ICommentProps) {
  return (
    <div className="grid grid-cols-12 gap-3 p-2">
      <div className="flex justify-center">
        <div className="w-fit h-fit">
          <Image
            src={"https://placehold.co/24x24"}
            alt={"DAO Banner"}
            width={24}
            height={24}
            className=" rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col col-span-11 gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[10px]">You</p>
            {pinned && (
              <p className="text-[10px] text-gray-400">Pinned Comment</p>
            )}
            <p className="text-[10px] text-gray-400">{createdAt}</p>
          </div>

          {pinned && <Pin size={12} />}
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <ChevronUp size={16} />
          <p className="font-medium text-xs">Like</p>
          <p className="font-medium text-xs text-gray-500">1.5k</p>
        </div>
        <div className="flex items-center gap-3">
          <ChevronDown size={16} />
          <p className="font-medium text-xs">Dislike</p>
          <p className="font-medium text-xs text-gray-500">176</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* TODO: Add appropriate icon */}
        <MessageSquareMore size={18} fill="white" stroke="black" />
        <div className="flex items-center gap-1">
          <p className="font-medium text-xs">Comments</p>
          <p className="font-medium text-xs text-gray-500">256</p>
        </div>

        <ChevronUp size={16} />
      </div>
    </div>
  );
}
