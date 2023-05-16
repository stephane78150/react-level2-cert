import React from "react";
import { useParams } from "react-router";
import { TeamName } from "../components/TeamName";
import { useNavigateToHome } from "./hooks";
import { GameList } from "../components/GameList";

export const Results: React.FC = () => {
  const { teamId: id } = useParams();
  const teamId= parseInt(id ?? "");
  const goBack = useNavigateToHome();

  return (
    <div className="flex flex-col">
      <TeamName teamId={teamId}/>
      <GameList teamId={teamId} className="border-0 border-t border-solid"/>
      <button
        type="button"
        id="backBtn"
        className="flex-shrink-0 text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 self-start"
        onClick={goBack}
      
      >
        &lt;&lt;Back to all team stats
      </button>
    </div>
  );
};
