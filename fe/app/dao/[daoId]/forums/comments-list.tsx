import React from "react";

// mock
import { IComment } from "@/lib/schema/threads.schema";

// components
import { ChevronDown } from "lucide-react";
import Comment from "@/forums/comment";

interface ICommentsListProps {
  comments: IComment[];
}

function CommentsList({ comments = [] }: ICommentsListProps) {
  return (
    <div className="border border-gray-600 p-2 rounded ">
      {comments.map((e) => (
        <Comment
          key={e.id}
          createdAt={e.createdAt}
          pinned={e.pinned}
          content={e.content}
        />
      ))}
      <div className="flex items-center justify-center p-2 gap-3">
        <ChevronDown size={16} />
        <p className="text-xs">Load more comments</p>
      </div>
    </div>
  );
}

export default CommentsList;
