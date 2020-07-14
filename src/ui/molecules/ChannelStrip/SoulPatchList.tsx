import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { AvailableSoulPatch } from '../../../recoil/soulPatches';

interface Props {
  patches: AvailableSoulPatch[];
  label: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  multiple?: boolean;
}

const SoulPatchList = ({patches, onChange, label, multiple}: Props) => {
  return (
    <FormControl style={{minWidth: 120}}>
      <InputLabel id={`select-${label}`}>{label}</InputLabel>
      <Select
        labelId={`select-${label}`}
        id={`select-${label}`}
        onChange={onChange}
        defaultValue={multiple ? [''] : ''}
        multiple={multiple}
      >
        {patches.map(patch => <MenuItem key={patch.UID} value={patch.UID}>{patch.displayName}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default React.memo(SoulPatchList);
