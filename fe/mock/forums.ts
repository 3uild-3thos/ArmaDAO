import { IForum } from "@/lib/schema/forums.schema";

export const forums: Array<IForum> = [
  {
    id: "1",
    title: "This is the greatest forum of all!",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    upVotes: 5,
    downVotes: 2,
    createdAt: "02/02/2024",
  },
  {
    id: "2",
    title: "This is the 2nd greatest forum of all!",
    description:
      "There are some moments that we think this is it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec nunc.",
    upVotes: 15,
    downVotes: 222,
    createdAt: "03/15/2024",
  },
];
