import { formatISO } from "date-fns";

const headers = new Headers({
  "X-RapidAPI-Key": "2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX",
  "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
});

export function fetchTeams(): Promise<ApiList<TeamSummary>> {
  return fetch("https://free-nba.p.rapidapi.com/teams?per_page=1000", {
    method: "GET",
    headers,
  }).then((r) => r.json());
}

export function fetchTeam(teamId: number): Promise<TeamSummary> {
  return fetch(`https://free-nba.p.rapidapi.com/teams/${teamId}`, {
    method: "GET",
    headers,
  }).then((r) => r.json());
}

export function fetchGames(
  teamId: number,
  dates: Date[]
): Promise<ApiList<GameSummary>> {
  const url = dates
    .map((d) => formatISO(d, { representation: "date" }))
    .reduce(
      (prev, d) => prev + `&dates[]=${d}`,
      `https://free-nba.p.rapidapi.com/games?page=0&per_page=12&team_ids[]=${teamId}`
    );
  return fetch(url, {
    method: "GET",
    headers,
    mode: "cors",
  }).then((r) => r.json());
}
