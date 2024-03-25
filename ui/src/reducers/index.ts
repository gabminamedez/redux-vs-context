import { combineReducers } from "@reduxjs/toolkit";

import { TeamsReducer, TeamsState } from "src/reducers/Teams";

export type RootState = {
  Teams: TeamsState;
};

export const rootReducer = combineReducers({
  Teams: TeamsReducer,
});
