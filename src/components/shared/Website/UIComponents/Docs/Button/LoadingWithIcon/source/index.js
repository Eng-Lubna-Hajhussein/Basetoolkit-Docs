export const source = `
import * as React from "react";
import {
  FormControlLabel,
  LoadingButton,
  Stack,
  SvgIcon,
  Switch,
} from "@basetoolkit/ui";

function LoadingWithIcon() {
  const [loading, setLoading] = React.useState(false);

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
          variant="contained"
          loading={loading}
          startIcon={
            <SvgIcon icon="upload" variant="filled" color="common.white" />
          }
          onClick={handleLoad}
        >
          Upload
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loading={loading}
          endIcon={<SvgIcon icon="send" variant="filled" color="primary" />}
          onClick={handleLoad}
        >
          Send
        </LoadingButton>
      </Stack>
    </div>
  );
}

export default LoadingWithIcon;
`;
