import React from "react";
// components
import AiSuggestion from "@/team/ai-suggestion";
import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import TeamMember from "@/team/team-member";
import Nodata from "@/team/no-data";

// mock
import { teamMembers } from "@/mock/team-member";

function DAOTeamPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 flex flex-col gap-8">
        {teamMembers.length === 0 ? (
          <Nodata />
        ) : (
          <>
            <AiSuggestion suggestion="provide more links to your team" />
            <div className="flex flex-col gap-6">
              <p className="text-3xl font-medium">GroovyBots Inc.</p>
              <p className="text-sm font-normal text-gray-300">
                Together, our diverse and talented team is committed to
                realizing the vision of DAO Cre-8. We believe in the power of
                community, innovation, and the endless possibilities that the
                Web3 era brings. Join us on this exciting journey as we shape
                the future of DAO Cre-8 and the Web3 landscape as a whole.
              </p>

              <div className="flex items-center gap-2">
                <Twitter size={16} />
                <Linkedin size={16} />
                <Github size={16} />
                <Globe size={16} />
              </div>
            </div>
            <div className="border-t border-gray-200/10"></div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-medium">Meet the team</p>
              {teamMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DAOTeamPage;
