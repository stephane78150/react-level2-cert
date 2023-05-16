import React, { useMemo } from 'react';
import { useListTeamsQuery } from "../api";
import { head } from 'lodash';
import { Error } from './Error';
import { Loading } from './Loading';

type TeamSelectorProps = {
  onTrackTeam: (teamId: number) => void;
  alreadyTracked: number[];
};

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  onTrackTeam,
  alreadyTracked
}) => {
  const { data, isLoading, isError } = useListTeamsQuery();

  const [selectedTeam, setSelectedTeam] = React.useState<number | null>(null);

  const currentSelection = useMemo(() => selectedTeam ?? head(data?.data)?.id, [selectedTeam, data]);

  const handleChange: React.FocusEventHandler<HTMLSelectElement> =
    React.useCallback((e) => {
      const selected: number = parseInt(e.target.value);
      setSelectedTeam(selected);
    }, []);

  const handleClick =
    React.useCallback(() => {
      if (currentSelection !== undefined) {
        onTrackTeam(currentSelection);
      }
    }, [currentSelection, onTrackTeam]);    

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  const canTrack = currentSelection !== undefined && !alreadyTracked.includes(currentSelection);

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-baseline">
      <label className="block text-gray-700 text-sm font-bold mb-2 mr-4" htmlFor="teamSelect">Team selector</label>
      <select
        id="teamSelect"
        className="block appearance-none grow bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
        title="Select a team"
        value={selectedTeam ?? undefined}
      >
        {data?.data.map((t) => (
          <option key={t.id} value={t.id}>
            {t.full_name}
          </option>
        ))}


      </select>
      <button
          id="trackBtn"
          type="button"
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-5"
          disabled={!canTrack}
          onClick={handleClick}
        >
          Track team
      </button>
    </form>
  );
};
