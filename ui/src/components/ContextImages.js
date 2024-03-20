import { useTeamsContext } from "../contexts/TeamsContext";

const ContextImages = () => {
  const { selectedLeague, teams } = useTeamsContext();

  return (
    <div>
      <h2>{selectedLeague}</h2>

      {teams.map((team) => {
        return <p>{team}</p>;
      })}
    </div>
  );
};

export default ContextImages;
