export const source = `
import * as React from 'react';
import { Tabs,Tab,SvgIcon } from '@basetoolkit/ui';

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor='secondary'
      aria-label="icon position tabs example"
    >
      <Tab icon={<SvgIcon icon='phone' variant='filled' />} label="top" />
      <Tab icon={<SvgIcon icon='phone_missed' variant='filled' />} iconPosition="start" label="start" />
      <Tab icon={<SvgIcon icon='favorite' variant='filled' />} iconPosition="end" label="end" />
      <Tab icon={<SvgIcon icon='person_pin' variant='filled' />} iconPosition="bottom" label="bottom" />
    </Tabs>
  );
}
`;
