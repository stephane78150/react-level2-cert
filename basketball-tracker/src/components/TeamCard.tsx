import React from "react";
import { Games } from "./Games";
import { useNavigateToGameResults } from "../routes/hooks";
import { TeamName } from "./TeamName";
import { TeamLogo } from "./TeamLogo";
import { CloseButton } from "./CloseButton";

export type TeamProps = Readonly<{
  teamId: number;
  removeTeam: (teamId: number) => void;
}>;

export const TeamCard: React.FC<TeamProps> = ({ teamId, removeTeam }) => {
  const goToGameResults = useNavigateToGameResults(teamId);

  return (
    <div className="basis-80 flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-500 hover:text-white">
      <div className="flex">
        <TeamName teamId={teamId}  />
        <CloseButton removeTeam={removeTeam} teamId={teamId}  className="flex-shrink-0 self-start mr-2 mb-2"/>
      </div>
      <div className="flex border-solid border-0 border-gray-300 border-t-2 mt-2 pt-4">        
          <div className="basis-60"><Games teamId={teamId} /></div>
          <div className="basis-20 flex-grow-0 border-solid border bg-gray-300"><TeamLogo teamId={teamId} className="w-full" /></div>
      </div>
      <button
        type="button"
        className="flex-shrink-0 text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 self-end"
        onClick={goToGameResults}
      
      >
        &gt;&gt; See games results
      </button>
    </div>
  );
};
