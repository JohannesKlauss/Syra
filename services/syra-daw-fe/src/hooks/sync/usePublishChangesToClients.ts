import { projectStore } from "../../recoil/projectStore";
import { useRecoilValue } from "recoil";
import useInterval from "../core/useInterval";
import { publishChangesToClients } from "../../recoil/effects/publishChangeEffect";

export default function usePublishChangesToClients() {
  const id = useRecoilValue(projectStore.id);

  useInterval(
    async id => {
      await publishChangesToClients(id);
    },
    500,
    id,
  );
}