// next
import Image from "next/image";

// components
import timeAgo from "@/lib/helpers/timeAgo";
import { Pin } from "lucide-react";

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
            alt={"Fleet Logo"}
            width={24}
            height={24}
            className="object-cover shadow-2xl rounded-2xl"
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
            <p className="text-[10px] text-gray-400">{timeAgo(createdAt)}</p>
          </div>

          {pinned && <Pin size={12} />}
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
}

export default Comment;
