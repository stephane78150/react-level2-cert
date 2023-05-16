import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import _ from "lodash";
import { useCallback, useMemo } from "react";
import { fetchTeams, fetchGames, fetchTeam } from "./fetch";

export function useListTeamsQuery() {
    return useQuery({ queryKey: ["list_teams"], queryFn: fetchTeams });
}


export function useGetTeamQuery(teamId: number) {
const queryFn = useCallback(
  () => fetchTeam(teamId),
  [teamId]
);  
  return useQuery({ queryKey: ["get_team", teamId], queryFn });
}

  
export function useListGamesQuery(teamId: number, today: Date, numberOfDays: number) {  
const gameDates = useMemo(() => _.range(0, numberOfDays).map(days => subDays(today, days)), [today, numberOfDays]);
const queryFn = useCallback(() => fetchGames(teamId, gameDates), [gameDates, teamId]);
return useQuery({ queryKey: ["games_by_team", teamId, numberOfDays], queryFn });
}
