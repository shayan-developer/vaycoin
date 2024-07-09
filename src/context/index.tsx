import React, { Dispatch, useContext, useReducer } from "react";

/* ========================================================================== */
/*                             CONTEXT SETUP                         */
/* ========================================================================== */

export type StateType = {
  points: number;
  profitPerHour: number;
};

export const initialData: StateType = {
  points: 0,
  profitPerHour: 10000,
};

export enum  ActionType {
  ADD_POINTS= "ADD_POINTS",
  ADD_PROFIT= "ADD_PROFIT",
};

type Action = {
  type: ActionType;
  payload: any;
};

const reducer = (state: StateType, { type, payload }: Action): StateType => {
  switch (type) {
    case ActionType.ADD_POINTS:


      return {
        ...state,
        points: state.points + payload,
      };

    default:
      return state;
  }
};

type ContextType = [StateType, Dispatch<Action>];

const CustomContext = React.createContext<ContextType>([initialData, () => {}]);

export const useCtxValues = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error("useCtxValues must be used within a ctxProvider");
  }
  return context;
};

export const CtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <CustomContext.Provider value={[state, dispatch]}>
      {children}
    </CustomContext.Provider>
  );
};
