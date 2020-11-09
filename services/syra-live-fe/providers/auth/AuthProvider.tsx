import React, { useContext } from "react";
import { useMeQuery } from "../../gql/generated";

interface Props {}

type TAuthContext = {
  isAuthenticated: boolean;
  loading: boolean;
  error?: Error;
}

const AuthContext = React.createContext<TAuthContext>({
  isAuthenticated: false,
  loading: false,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { data, loading, error } = useMeQuery();

  return <AuthContext.Provider value={{ isAuthenticated: !!data?.me, loading, error }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
