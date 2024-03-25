import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxTeamsList from "src/components/ReduxTeamsList";

import { f1Teams, f1Value, nbaTeams, nbaValue } from "src/constants/teams";
import { RootState } from "src/reducers";
import { TeamsActions } from "src/reducers/Teams";

const ReduxHome = () => {
  const dispatch = useDispatch();

  const teamsRedux = useSelector((state: RootState) => state.Teams);
  const selectedLeague = teamsRedux.selectedLeague;

  const handleSelect = (value: string) => {
    dispatch(TeamsActions.setSelectedLeague(value));
  };

  useEffect(() => {
    if (selectedLeague === nbaValue) {
      dispatch(TeamsActions.setTeams(nbaTeams));
    } else if (selectedLeague === f1Value) {
      dispatch(TeamsActions.setTeams(f1Teams));
    }
  }, [dispatch, selectedLeague]);

  return (
    <div className="w-[80%] block mx-auto">
      <h1>Redux Sports</h1>

      <hr />

      <select
        value={selectedLeague}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value={nbaValue}>NBA</option>
        <option value={f1Value}>Formula 1</option>
      </select>

      <hr />

      <ReduxTeamsList />
    </div>
  );
};

export default ReduxHome;
