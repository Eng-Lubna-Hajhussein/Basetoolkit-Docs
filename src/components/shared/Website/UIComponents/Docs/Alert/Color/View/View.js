import * as React from 'react';
import { Alert } from '@basetoolkit/ui';

export default function ColorAlerts() {
  return (
    <Alert severity="success" color="warning" sx={{"& svg":{fill:"warning"}}}>
      This is a success Alert with warning colors.
    </Alert>
  );
}
