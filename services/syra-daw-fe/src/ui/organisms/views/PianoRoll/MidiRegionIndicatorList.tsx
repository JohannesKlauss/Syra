import React, { useContext } from "react";
import { regionStore } from "../../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import { ChannelContext } from "../../../../providers/ChannelContext";
import MidiRegionIndicator from "./MidiRegionIndicator";
import { RegionContext } from '../../../../providers/RegionContext';

interface Props {

}

const MidiRegionIndicatorList: React.FC<Props> = ({}) => {
  const channelId = useContext(ChannelContext);
  const regionIds = useRecoilValue(regionStore.findIdsByChannelId(channelId));
  
  return (
    <>
      {regionIds.map(id => (
        <RegionContext.Provider value={id} key={id}>
          <MidiRegionIndicator/>
        </RegionContext.Provider>
      ))}
    </>
  );
};

export default MidiRegionIndicatorList;
