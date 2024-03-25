import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { nbaValue } from "src/constants/teams";

type TeamsContextType = {
  selectedLeague: string;
  setSelectedLeague: Dispatch<SetStateAction<string>>;

  teams: string[];
  setTeams: Dispatch<SetStateAction<string[]>>;
};

type ProviderProps = {
  children: ReactNode;
};

export const TeamsContext = createContext<TeamsContextType>(
  {} as TeamsContextType,
);

export const TeamsProvider = ({ children }: ProviderProps) => {
  const [selectedLeague, setSelectedLeague] = useState<string>(nbaValue);
  const [teams, setTeams] = useState<string[]>([]);

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
};

export const useTeamsContext = () => {
  return useContext(TeamsContext);
};
