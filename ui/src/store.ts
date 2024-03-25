import { Action, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import type { PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";

import { rootReducer } from "src/reducers";

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  if (process.env.REACT_APP_ENV !== "prod" && module.hot) {
    module.hot.accept("src/reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
};

export type AppStore = ReturnType<typeof setupStore>;
export type DispatchType = AppStore["dispatch"];
export type GetStateType = AppStore["getState"];
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
