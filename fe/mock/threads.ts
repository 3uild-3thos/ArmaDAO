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
        createdAt: "05/01/2024",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "05/01/2024",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "05/01/2024",
      },
    ],
    title: "We’re going to the moon!",
    updatedAt: "Updated December 23, 2022 ∙ 12:51 PM UTC",
    createdAt: "05/01/2024",
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
        createdAt: "05/01/2024",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "05/01/2024",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "05/01/2024",
      },
    ],
    createdAt: "05/01/2024",
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
        createdAt: "05/01/2024",
      },
      {
        id: "2",
        pinned: false,
        content: "hmmm... ",
        name: "kevinmcx.sol",
        createdAt: "05/01/2024",
      },
      {
        id: "3",
        pinned: false,
        content: "This is so goooood. Can’t wait!",
        name: "theo.eth",
        createdAt: "05/01/2024",
      },
    ],
    updatedAt: "Updated December 23, 2022 ∙ 12:51 PM UTC",
    createdAt: "05/01/2024",
    type: "Discussion",
    like: 150,
    dislike: 20,
    comment: 20,
    description:
      "Help us build solar-powered schools for exchange students from outer space! Back our project and get a chance to attend a galactic graduation party with alien DJs and zero-gravity dance-offs!",
  },
];
