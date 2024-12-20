export const source = `
import * as React from "react";
import {
  FormControlLabel,
  LoadingButton,
  Stack,
  Switch,
} from "@basetoolkit/ui";

function PositionedLoading() {
  const [loading, setLoading] = React.useState(true);

  const handleLoad = () => {
    setLoading(true);
  };

  return (
    <div>
      <FormControlLabel
        sx={{ display: "block" }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Stack direction="row" spacing={2} mt={3}>
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          variant="contained"
          onClick={handleLoad}
        >
          Start Load
        </LoadingButton>
        <LoadingButton
          loading={loading}
          loadingPosition="end"
          variant="contained"
          onClick={handleLoad}
        >
          End Load
        </LoadingButton>
      </Stack>
    </div>
  );
}

export default PositionedLoading;
`;
