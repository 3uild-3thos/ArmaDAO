export const PATH = {
  home: "/",

  // Mother Ship
  mothershipMint: "/mint",
  mothershipProposals: "/proposals",
  mothershipCreateProposal: "/proposals/create",
  mothershipProposalDetail: "/proposals/[proposalId]",

  // Fleet
  fleetCreate: "/dao/create",
  fleetDetail: "/dao/[daoId]",
  fleetProposals: "/dao/[daoId]/proposals",
  fleetProposalCreate: "/dao/[daoId]/proposals/create",
  fleetProposalDetail: "/dao/[daoId]/proposals/[proposalId]",
  fleetForums: "/dao/[daoId]/forums",
  fleetForumCreate: "/dao/[daoId]/forums/create",
  fleetForumDetail: "/dao/[daoId]/forums/[forumId]",
  fleetTeam: "/dao/[daoId]/team",
  fleetSettings: "/dao/[daoId]/settings",
};

export const replacePathKey = (
  path: string,
  params: { [key: string]: string }
) => {
  let replacedPath = path;
  Object.keys(params).forEach((key) => {
    replacedPath = replacedPath.replace(`[${key}]`, params[key]);
  });
  return replacedPath;
};
