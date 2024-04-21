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

  // Waitlist
  waitlist:
    process.env.NEXT_PUBLIC_WAITLIST_LINK ??
    "https://airtable.com/appRtoUHAbn2q0sAH/pagVIw2S9LQfeeIdU/form",
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
