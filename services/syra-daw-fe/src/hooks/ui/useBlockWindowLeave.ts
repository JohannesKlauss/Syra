import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "../../const/routes";

export default function useBlockWindowLeave() {
  const { block } = useHistory();

  useEffect(() => {
    const unblock = block((location) => {
      if (
        location.pathname === routes.EditorShell &&
        window.confirm(`Some changes might not have been saved. Are you sure you want to leave?`)
      ) {
        unblock();
      }
    });

    return () => {
      unblock();
    }
  }, [block]);
}