import classNames from "classnames";
import React, { useCallback } from "react";
import { useGetTeamQuery } from "../api";

type CloseButtonProps = Readonly<{
  teamId: number;
  className?: string;
  removeTeam: (teamId: number) => void;
}>;

export const CloseButton: React.FC<CloseButtonProps> = ({
  teamId,
  className,
  removeTeam,
}) => {
  const onClose = useCallback(() => removeTeam(teamId), [removeTeam, teamId]);
  const { data: team, isFetched } = useGetTeamQuery(teamId);

  if (!isFetched) {
    return null;
  }

  return (
    <button
      type="button"
      className={classNames(
        " text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5",
        className
      )}
      onClick={onClose}
      id={`remove${team?.abbreviation}`}
    >
      X
    </button>
  );
};
