import React, { useContext, useMemo } from "react";
import { mapNumberToNote } from '../../../../utils/noteMapper';
import DropdownButton from '../../../atoms/Buttons/DropdownButton';
import { useRecoilState } from 'recoil';
import { arrangeWindowStore } from '../../../../recoil/arrangeWindowStore';
import { ViewContext } from "../../../../providers/ViewContext";
import { gridStore } from "../../../../recoil/gridStore";

function RulerSnapSettings() {
  const { view } = useContext(ViewContext);
  const [isSnapActive, setIsSnapActive] = useRecoilState(gridStore.isSnapActive(view));
  const [gridSnapValue, setGridSnapValue] = useRecoilState(gridStore.snapValue(view));

  const snapValueItems = useMemo(
    () =>
      // TODO: THIS SHOULD PROBABLY LIVE IN A CONSTANT FIELD SO WE CAN EASILY ADJUST
      [0.25, 0.5, 1, 2, 3, 4, 8].map((val) => ({
        onClick: () => setGridSnapValue(val),
        label: mapNumberToNote(val),
      })),
    [setGridSnapValue],
  );

  return (
    <DropdownButton
      label={mapNumberToNote(gridSnapValue)}
      color={isSnapActive ? 'teal' : 'gray'}
      size={'sm'}
      mt={0}
      onClick={() => setIsSnapActive((currVal) => !currVal)}
      menuItems={snapValueItems}
    >
      {mapNumberToNote(gridSnapValue)}
    </DropdownButton>
  );
}

export default RulerSnapSettings;
