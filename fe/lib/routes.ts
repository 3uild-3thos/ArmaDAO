export const PATH = {
  home: "/",

  // Mother Ship
  mothershipMint: "/mint",
  mothershipProposals: "/proposals",
  mothershipCreateProposal: "/proposals/create",
  mothershipProposalDetail: "/proposals/[proposalId]",

  // Fleet
  fleets: "/fleets",
  fleetCreate: "/fleets/create",
  fleetDetail: "/fleets/[fleetId]",
  fleetProposals: "/fleets/[fleetId]/proposals",
  fleetProposalCreate: "/fleets/[fleetId]/proposals/create",
  fleetProposalDetail: "/fleets/[fleetId]/proposals/[proposalId]",
  fleetForums: "/fleets/[fleetId]/forums",
  fleetForumCreate: "/fleets/[fleetId]/forums/create",
  fleetForumDetail: "/fleets/[fleetId]/forums/[forumId]",
  fleetTeam: "/fleets/[fleetId]/team",
  fleetSettings: "/fleets/[fleetId]/settings",
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
