import { IThread } from "@/lib/schema/threads.schema";

export const threads: Array<IThread> = [
  {
    id: "1",
    type: "Update",
    comments: [
      {
        id: "1",
        pinned: true,
        content: "Disclaimer: this is a dream of us, don’t take it literally.",
        name: "You",
        createdAt: "a minute ago",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "2 minutes ago",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "3 days ago",
      },
    ],
    title: "We’re going to the moon!",
    updatedAt: "Updated December 23, 2022 ∙ 12:51 PM UTC",
    createdAt: "December 17, 2023",
    changesTitle: "We’re going to the mars!",
    like: 150,
    dislike: 20,
    comment: 20,
    description:
      "Help us build solar-powered schools for exchange students from outer space! Back our project and get a chance to attend a galactic graduation party with alien DJs and zero-gravity dance-offs!",
  },
  {
    id: "2",
    updatedAt: "Updated December 23, 2022 ∙ 12:51 PM UTC",
    comments: [
      {
        id: "1",
        pinned: true,
        content: "Disclaimer: this is a dream of us, don’t take it literally.",
        name: "You",
        createdAt: "a minute ago",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "2 minutes ago",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "3 days ago",
      },
    ],
    createdAt: "December 17, 2023",
    type: "Discussion",
    changesTitle: "We’re going to the mars!",
    title: "We’re might be going to the moon!",
    like: 150,
    dislike: 20,
    comment: 20,
    description:
      "Help us build solar-powered schools for exchange students from outer space! Back our project and get a chance to attend a galactic graduation party with alien DJs and zero-gravity dance-offs!",
  },
  {
    id: "3",
    title: "We’re might be going to the moon!",
    comments: [
      {
        id: "1",
        pinned: true,
        content: "Disclaimer: this is a dream of us, don’t take it literally.",
        name: "You",
        createdAt: "a minute ago",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "2 minutes ago",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "3 days ago",
      },
    ],
    updatedAt: "Updated December 23, 2022 ∙ 12:51 PM UTC",
    createdAt: "December 17, 2023",
    type: "Discussion",
    like: 150,
    dislike: 20,
    comment: 20,
    description:
      "Help us build solar-powered schools for exchange students from outer space! Back our project and get a chance to attend a galactic graduation party with alien DJs and zero-gravity dance-offs!",
  },
];
