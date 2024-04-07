import { IForum } from "@/lib/schema/forums.schema";

const findLatestForum = (forums: Array<IForum>): IForum => {
  return forums.reduce((latestForum, currentForum) => {
    const latestForumDate = new Date(latestForum.createdAt);
    const currentForumDate = new Date(currentForum.createdAt);
    return currentForumDate > latestForumDate ? currentForum : latestForum;
  });
};

export default findLatestForum;
