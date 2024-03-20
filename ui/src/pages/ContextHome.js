import { TeamsProvider, useTeamsContext } from "../contexts/TeamsContext";
import ContextImages from "../components/ContextImages";

const ContextHome = () => {
  const { selectedLeague, setSelectedLeague, setTeams } = useTeamsContext();

  const handleSelect = (value) => {
    setSelectedLeague(value);

    if (selectedLeague === "nba") {
      setTeams(["Heat", "Thunder", "Cavaliers", "Lakers", "Knicks"]);
    } else if (selectedLeague === "f1") {
      setTeams(["Ferrari", "Mercedes", "Williams", "Alfa Romeo", "McLaren"]);
    }
  };

  return (
    <TeamsProvider>
      <div className="w-[80%] block mx-auto">
        <h1>Cotext Sports</h1>

        <hr />

        <select
          value={selectedLeague}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="nba">NBA</option>
          <option value="f1">Formula 1</option>
        </select>

        <hr />

        <ContextImages />
      </div>
    </TeamsProvider>
  );
};

export default ContextHome;
