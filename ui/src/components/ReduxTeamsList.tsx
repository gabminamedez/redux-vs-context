import { useSelector } from "react-redux";

import { RootState } from "src/reducers";

const ReduxTeamsList = () => {
  const teamsRedux = useSelector((state: RootState) => state.Teams);
  const selectedLeague = teamsRedux.selectedLeague;
  const teams = teamsRedux.teams;

  return (
    <div>
      <h2>{selectedLeague}</h2>

      {teams.map((team: string) => {
        return <p>{team}</p>;
      })}
    </div>
  );
};

export default ReduxTeamsList;
