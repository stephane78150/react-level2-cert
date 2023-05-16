import React from "react";
import { useListGamesQuery } from "../api";
import { Loading } from "./Loading";
import { Error } from "./Error";

type GameListProps = Readonly<{
  teamId: number;
  className?: string;
}>;

export const GameList: React.FC<GameListProps> = ({ teamId, className }) => {
  const { data, isLoading, isError } = useListGamesQuery(
    teamId,
    new Date(),
    12
  );

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  if (data.meta.total_count === 0) {
    return (
      <div className={className}>
        <span className="text-xs">
          No games were played during the last 12 days
        </span>
      </div>
    );
  }

  return (
    <div className = { className }>
      <p className="text-lg">List of games played during the last 12 days :</p>      
      <ul>
        {data.data.map((g) => (
          <li key={g.id}>
            <span className="font-bold">{g.home_team.abbreviation}</span><span className="px-1">{g.home_team_score}</span>
            <span className="mx-2">-</span>
            <span className="font-bold">{g.visitor_team.abbreviation}</span><span className="px-1">{g.visitor_team_score}</span>
            <span className="text-xs">({g.status})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
