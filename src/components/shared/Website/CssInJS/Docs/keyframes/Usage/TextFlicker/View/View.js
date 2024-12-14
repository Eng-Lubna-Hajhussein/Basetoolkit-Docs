import React from 'react';
import { Typography, keyframes ,cssInjection} from '@basetoolkit/ui';

const flicker = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const FlickerText = cssInjection(Typography)`
  animation: ${flicker} 0.8s infinite alternate;
`;

const FlickerTextExample = () => (
  <FlickerText variant="h4" color="primary">
    Flickering Text
  </FlickerText>
);

export default FlickerTextExample;
