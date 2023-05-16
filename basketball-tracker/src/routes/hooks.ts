import { useCallback } from "react";
import { useNavigate } from "react-router";

export function useNavigateToGameResults(teamId: number) {
    const navigateTo = useNavigate();
    return useCallback(() => {
    navigateTo(`/results/${teamId}`);
    }, [navigateTo, teamId]);
}

export function useNavigateToHome() {
  const navigateTo = useNavigate();
  return useCallback(() => {
    navigateTo('/');
  }, [navigateTo]);
}
