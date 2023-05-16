import { TeamSelector } from "./components/TeamSelector";
import { TeamCard } from './components/TeamCard';
import { useTeamsReducer } from './state';

function App() {
  const { selected, addTeam, removeTeam } = useTeamsReducer();

  return (
    <div className="p-5">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 mb-10">NBA score tracking app</h1>    
      <TeamSelector onTrackTeam={addTeam} alreadyTracked={selected} />  
      <div className="flex flex-wrap gap-5">{selected.map((teamId) => <TeamCard key={teamId} teamId={teamId} removeTeam={removeTeam}/>)}</div>
    </div>
  );
}

export default App;
