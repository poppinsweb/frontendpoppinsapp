import { createContext } from "react";
import { useCards } from "../hooks/useCards";

export const CardContext = createContext();

export function CardsProvider({ children }) {

  return (
    <CardContext.Provider>
      { children }
    </CardContext.Provider>
  )
}
