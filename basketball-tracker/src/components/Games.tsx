import { reduce } from "lodash";
import { useListGamesQuery } from "../api";
import { getOpponentScore, getTeamScore } from "../api/helper";
import { Error } from "./Error";
import { GameStatus } from "./GameStatus";
import { Loading } from "./Loading";

function average(points: number[]) {  
  return points.reduce((total, points) => total + points, 0) / points.length;
}

export const Games: React.FC<{ teamId: number }> = ({ teamId }) => {
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

  const games = data.data;

  if (games.length === 0) {
    return <span className="text-xs">No games played in the last 12 days</span>;
  }

  const averagePointsScored = average(games.map(g => getTeamScore(g, teamId)));
  const averagePointsConceded = average(games.map((g) => getOpponentScore(g, teamId)));

  return (
    <div className="flex flex-col justify-start">
      <h5 className="my-1">Results of the past 12 days:</h5>
      <div className="d-flex justify-start flex-wrap py-3">
        {games.map((g) => (
          <GameStatus key={g.id} teamId={teamId} game={g} className="mr-2 p-2" />
        ))}
      </div>
      <div className="my-1 text-xs">Average points scored : {averagePointsScored}</div>
      <div className="my-1 text-xs">Average points conceded : {averagePointsConceded}</div>
    </div>
  );
};


