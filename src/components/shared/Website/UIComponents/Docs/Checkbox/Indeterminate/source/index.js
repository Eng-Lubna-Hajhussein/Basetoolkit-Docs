export const source = `
import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Box } from '@basetoolkit/ui';

const ParentChildCheckboxes = () => {
  const [parentChecked, setParentChecked] = useState(false);
  const [childChecked, setChildChecked] = useState([false, false]);

  const handleParentChange = () => {
    setParentChecked(!parentChecked);
    setChildChecked([!parentChecked, !parentChecked]);
  };

  const handleChildChange = (index) => {
    const newChecked = [...childChecked];
    newChecked[index] = !newChecked[index];
    setChildChecked(newChecked);
    setParentChecked(newChecked.every(Boolean));
  };

  return (
    <div>
      <FormControlLabel
        label="Parent Checkbox"
        control={
          <Checkbox
            checked={parentChecked || childChecked.some(Boolean)}
            indeterminate={!parentChecked && childChecked.some(Boolean)}
            onChange={handleParentChange}
          />
        }
      />
      <Box sx={{ ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={<Checkbox checked={childChecked[0]} onChange={() => handleChildChange(0)} />}
        />
        <FormControlLabel
          label="Child 2"
          control={<Checkbox checked={childChecked[1]} onChange={() => handleChildChange(1)} />}
        />
      </Box>
    </div>
  );
};

export default ParentChildCheckboxes;
`;
