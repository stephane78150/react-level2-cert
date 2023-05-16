import { useReducer, useCallback } from 'react'

type State = number[];

type TeamAdded = Readonly<{
  type: 'TEAM_ADDED';
  id: number;
}>

type TeamRemoved = Readonly<{
  type: 'TEAM_REMOVED';
  id: number;
}>;

type Action  = TeamAdded | TeamRemoved;

const intialState: State = [];

function reduce(state: State, action: Action) : State {
    switch (action.type) {
        case 'TEAM_ADDED': 
            if (state.includes(action.id)) {
                return state;
            }
            return [...state, action.id];
        case 'TEAM_REMOVED':
            return state.filter(x => x !== action.id);
        default:
            return state;
    }
}

export function useTeamsReducer() {
    const [state, dispatch] = useReducer(reduce, intialState);
    const addTeam = useCallback( (id: number) => {
        dispatch({type: 'TEAM_ADDED', id} as TeamAdded);
    }, [dispatch]);
    const removeTeam = useCallback( (id: number) => {
        dispatch({type: 'TEAM_REMOVED', id} as TeamRemoved);
    }, [dispatch]);
    return {addTeam, removeTeam, selected: state};
}