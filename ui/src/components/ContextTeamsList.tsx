import { useTeamsContext } from "src/contexts/TeamsContext";

const ContextTeamsList = () => {
  const { selectedLeague, teams } = useTeamsContext();

  return (
    <div>
      <h2>{selectedLeague}</h2>

      {teams.map((team: string) => {
        return <p>{team}</p>;
      })}
    </div>
  );
};

export default ContextTeamsList;
