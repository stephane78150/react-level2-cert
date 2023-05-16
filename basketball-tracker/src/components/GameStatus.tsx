import React from "react";
import { getGameOutcome } from "../api/helper";
import classNames from "classnames";

type  GameProps = Readonly<{
    game: GameSummary; 
    teamId: number; 
    className?: string
}>;

export const GameStatus: React.FC<GameProps> = ({game, teamId, className }) => {
    const outcome = getGameOutcome(game, teamId);

    switch (outcome) {
        case 'win':
            return <span className={classNames("bg-green-800 text-white rounded-full", className)}>W</span>;
        case 'tied':
            return <span className={classNames("bg-gray-300 text-gray-500 rounded-full", className)}>T</span>;
        case 'loss':
            return <span className={classNames("bg-red-800 text-white rounded-full", className)}>L</span>;
        default: 
            return null;
    }    
}
