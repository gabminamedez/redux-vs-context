import { createContext, useContext, useState } from "react";

export const TeamsContext = createContext({});

export function TeamsProvider({ children }) {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [teams, setTeams] = useState([]);

  return (
    <TeamsContext.Provider
      value={{
        selectedLeague,
        setSelectedLeague,
        teams,
        setTeams,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
}

export function useTeamsContext() {
  return useContext(TeamsContext);
}
