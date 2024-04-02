"use client";
import { useState } from "react";

// mock
import { IComment } from "@/lib/schema/threads.schema";

// components
import Comment from "@/app/fleets/[fleetId]/forums/comment";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ICommentsListProps {
  comments: IComment[];
}

function CommentsList({ comments = [] }: ICommentsListProps) {
  const [shouldReadMore, setShouldReadMore] = useState(false);
  const handleShouldReadMore = () => setShouldReadMore(!shouldReadMore);

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
        <Button
          variant={"ghost"}
          className="gap-2 p-0"
          onClick={handleShouldReadMore}
        >
          {shouldReadMore ? (
            <>
              <ChevronUp size={16} />
              <p className="text-xs">See less</p>
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              <p className="text-xs">Load more comments</p>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default CommentsList;
