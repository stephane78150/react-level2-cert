type ApiList<T> = {
    data: T[];
    meta: {
      current_page: number;
      next_page: number;
      per_page: number;
      total_count: number;
      total_pages: number;
    };
  };
  
  type TeamSummary = {
    id: number;
    abbreviation: string;
    city: string;
    conference: "East" | "West";
    division: string;
    full_name: string;
    name: string;
  };
  
  type GameSummary = {
    id: number;
    date: string;
    home_team: TeamSummary;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: TeamSummary;
    visitor_team_score: number;
  }
  