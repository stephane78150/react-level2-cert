import React from "react";
import { useGetTeamQuery } from "../api";
import { Loading } from "./Loading";
import { Error } from "./Error";

type TeamNameProps = Readonly<{ teamId: number; className?: string }>;

export const TeamLogo: React.FC<TeamNameProps> = ({ teamId, className }) => {
  const { data: team, isLoading, isError } = useGetTeamQuery(teamId);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (<img className={className} src={`https://interstate21.com/nba-logos/${team?.abbreviation}.png`} />);
};
