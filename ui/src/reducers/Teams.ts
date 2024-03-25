import { createSlice } from "@reduxjs/toolkit";

import { nbaValue } from "src/constants/teams";

export type TeamsState = {
  selectedLeague: string;
  teams: string[];
};

const initialState: TeamsState = {
  selectedLeague: nbaValue,
  teams: [],
};

const teams = createSlice({
  name: "Teams",
  initialState,
  reducers: {
    setSelectedLeague: (state, action) => {
      state.selectedLeague = action.payload;
    },
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
    clear: () => initialState,
  },
});

export const TeamsActions = teams.actions;
export const TeamsReducer = teams.reducer;
