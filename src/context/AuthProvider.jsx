import { createContext, useContext} from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { register, login, loading, user, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ register, login, loading, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// https://www.youtube.com/watch?v=H_vEJt5Id_I
