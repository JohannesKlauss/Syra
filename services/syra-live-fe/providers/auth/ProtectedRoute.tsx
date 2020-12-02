import React from "react";
import AuthProvider, { useAuth } from "./AuthProvider";
import { Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Unauthorized from "../../ui/atoms/Unauthorized/Unauthorized";
import TopBar from "../../ui/molecules/TopBar/TopBar";

interface Props {

}

const ProtectedRoute: React.FC<Props> = ({children}) => {
  const { isAuthenticated, loading } = useAuth();
  const { push } = useRouter();

  if (loading) return <Skeleton h={24}/>;
  if (!isAuthenticated) {
    (async () => {
      await push('/');
    })();

    return <Unauthorized/>;
  }

  return (
    <>
      <TopBar/>
      {children}
    </>
  );
};

export default ProtectedRoute;
