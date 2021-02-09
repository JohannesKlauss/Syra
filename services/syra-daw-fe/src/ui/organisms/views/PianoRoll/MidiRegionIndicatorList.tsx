import React, { useContext } from "react";
import { regionStore } from "../../../../recoil/regionStore";
import { useRecoilValue } from "recoil";
import { ChannelContext } from "../../../../providers/ChannelContext";
import MidiRegionIndicator from "./MidiRegionIndicator";
import { RegionContext } from '../../../../providers/RegionContext';

interface Props {

}

const MidiRegionIndicatorList: React.FC<Props> = () => {
  const channelId = useContext(ChannelContext);
  const regionIds = useRecoilValue(regionStore.findIdsByChannelId(channelId));

  if (regionIds.length > 0 && typeof regionIds[0] !== 'string') {
    // TODO: THIS HAPPENS WHEN THE SESSION GETS LOADED AND THE VALUE ISN'T TRANSFORMED PROPERLY, YET. FIX THIS.
    return null;
  }
  
  return (
    <>
      {regionIds.map(id => (
        <RegionContext.Provider value={id} key={id}>
          <MidiRegionIndicator key={id}/>
        </RegionContext.Provider>
      ))}
    </>
  );
};

export default MidiRegionIndicatorList;
