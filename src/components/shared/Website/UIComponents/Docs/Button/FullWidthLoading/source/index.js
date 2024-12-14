export const source = `
import * as React from "react";
import { LoadingButton } from "@basetoolkit/ui";

function FullWidthLoading() {
  const [loading, setLoading] = React.useState(false);

  const handleProcess = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <LoadingButton
      fullWidth
      variant="contained"
      loading={loading}
      onClick={handleProcess}
    >
      Start Process
    </LoadingButton>
  );
}

export default FullWidthLoading;
`;
