import React, { useEffect, useMemo } from "react";
import { mapNumberToNote } from '../../../../utils/noteMapper';
import DropdownButton from '../../../atoms/Buttons/DropdownButton';
import { useRecoilState } from 'recoil';
import { gridStore } from "../../../../recoil/gridStore";
import { View } from "../../../../types/View";
import { IoIosPower } from "react-icons/io";
import { Flex, IconButton } from "@chakra-ui/react";

interface Props {
  view: View;
  baseSnapValue?: number;
}

const RulerSnapSettings: React.FC<Props> = ({view, baseSnapValue}) => {
  const [isSnapActive, setIsSnapActive] = useRecoilState(gridStore.isSnapActive(view));
  const [gridSnapValue, setGridSnapValue] = useRecoilState(gridStore.snapValue(view));

  useEffect(() => {
    baseSnapValue && setGridSnapValue(baseSnapValue);
  }, [baseSnapValue]);

  const snapValueItems = useMemo(
    () =>
      // TODO: THIS SHOULD PROBABLY LIVE IN A CONSTANT FIELD SO WE CAN EASILY ADJUST
      [0.25, 0.5, 1, 2, 4, 8].map((val) => ({
        onClick: () => setGridSnapValue(val),
        label: mapNumberToNote(val),
      })),
    [setGridSnapValue],
  );

  return (
    <Flex align={'center'}>
      <IconButton
        icon={<IoIosPower />}
        size={'sm'}
        aria-label={`Toggle Snap`}
        title={`Toggle Snap`}
        colorScheme={isSnapActive ? 'teal' : 'gray'}
        roundedBottomRight={0}
        roundedTopRight={0}
        onClick={() => setIsSnapActive(currVal => !currVal)}
      />
      <DropdownButton
        label={mapNumberToNote(gridSnapValue)}
        colorScheme={isSnapActive ? 'teal' : 'gray'}
        size={'sm'}
        mt={0}
        roundedBottomLeft={0}
        roundedTopLeft={0}
        menuItems={snapValueItems}
      >
        {mapNumberToNote(gridSnapValue)}
      </DropdownButton>
    </Flex>

  );
};

export default RulerSnapSettings;
