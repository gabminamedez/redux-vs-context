import { useTeamsContext } from "src/contexts/TeamsContext";
import ContextTeamsList from "src/components/ContextTeamsList";
import { f1Teams, f1Value, nbaTeams, nbaValue } from "src/constants/teams";
import { useEffect } from "react";

const ContextHome = () => {
  const { selectedLeague, setSelectedLeague, setTeams } = useTeamsContext();

  const handleSelect = (value: string) => {
    setSelectedLeague(value);
  };

  useEffect(() => {
    if (selectedLeague === nbaValue) {
      setTeams(nbaTeams);
    } else if (selectedLeague === f1Value) {
      setTeams(f1Teams);
    }
  }, [selectedLeague, setTeams]);

  return (
    <div className="w-[80%] block mx-auto">
      <h1>Cotext Sports</h1>

      <hr />

      <select
        value={selectedLeague}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value={nbaValue}>NBA</option>
        <option value={f1Value}>Formula 1</option>
      </select>

      <hr />

      <ContextTeamsList />
    </div>
  );
};

export default ContextHome;
