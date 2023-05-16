export function getTeamScore(game: GameSummary, teamId: number) {
  if (game.home_team.id === teamId) {
    return game.home_team_score;
  }
  if (game.visitor_team.id === teamId) {
    return game.visitor_team_score;
  }
  throw new Error("non relevant game");
}

export function getOpponentScore(game: GameSummary, teamId: number) {
  if (game.home_team.id === teamId) {
    return game.visitor_team_score;
  }
  if (game.visitor_team.id === teamId) {
    return game.home_team_score;
  }
  throw new Error("non relevant game");
}

type GameOutcome ="win" | "loss" | "tied";


export function getGameOutcome(game: GameSummary, teamId: number): GameOutcome  | null {
  const teamScore = getTeamScore(game, teamId);
  const opponentScore = getOpponentScore(game, teamId);
  if (teamScore === null || opponentScore === null) {
    return null;
  }
  const difference = teamScore - opponentScore;
  if (difference > 0) {
    return 'win';
  }
  if (difference < 0) {
    return 'loss';
  }
  return 'tied';
}

