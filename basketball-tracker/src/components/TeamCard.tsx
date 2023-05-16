import React, { useCallback } from "react";
import { useGetTeamQuery } from "../api";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Games } from "./Games";

export type TeamProps = Readonly<{
  teamId: number;
  removeTeam: (teamId: number) => void;
}>;

export const TeamCard: React.FC<TeamProps> = ({ teamId, removeTeam }) => {
  const onClose = useCallback(() => removeTeam(teamId), [removeTeam, teamId]);
  const gotoGame = () => alert('go to game');
  const { data: team, isLoading, isError } = useGetTeamQuery(teamId);


  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="basis-80 flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-500 hover:text-white">
      <div className="flex">
        <div className="flex flex-col flex-grow pr-3">
          <h5 className="text-2xl font-bold my-0">
            {team?.full_name} [{team?.abbreviation}]
          </h5>
          <h6 className="text-lg font-bold my-0">
            {team?.conference} conference
          </h6>
        </div>
        <button
          type="button"
          className="flex-shrink-0 self-start text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="flex border-solid border-0 border-gray-300 border-t-2 mt-2 pt-4">        
          <div className="basis-60"><Games teamId={teamId} /></div>
          <div className="basis-20 flex-grow-0 border-solid border bg-gray-300"><img className="w-full" src={`https://interstate21.com/nba-logos/${team?.abbreviation}.png`} /></div>
      </div>
      <button
        type="button"
        className="flex-shrink-0 text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 self-end"
        onClick={gotoGame}
      
      >
        &gt;&gt; See games results
      </button>
    </div>
  );
};
