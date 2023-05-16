import React from "react";
import { useGetTeamQuery } from "../api";
import { Loading } from "./Loading";
import { Error } from "./Error";

type TeamNameProps = Readonly<{ teamId: number }>;

export const TeamName: React.FC<TeamNameProps> = ({ teamId }) => {
  const { data: team, isLoading, isError } = useGetTeamQuery(teamId);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="flex flex-col flex-grow pr-3">
      <h5 className="text-2xl font-bold my-0">
        {team?.full_name} [{team?.abbreviation}]
      </h5>
      <h6 className="text-lg font-bold my-0">{team?.conference} conference</h6>
    </div>
  );
};
