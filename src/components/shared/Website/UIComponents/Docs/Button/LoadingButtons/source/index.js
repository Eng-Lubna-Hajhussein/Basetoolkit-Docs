export const source = `
import * as React from "react";
import {
  FormControlLabel,
  LoadingButton,
  Stack,
  Switch,
} from "@basetoolkit/ui";

function BasicLoading() {
  const [loading, setLoading] = React.useState(true);

  const handleClick = () => {
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
          onClick={handleClick}
        >
          Contained
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          loading={loading}
          onClick={handleClick}
        >
          Outlined
        </LoadingButton>
        <LoadingButton variant="text" loading={loading} onClick={handleClick}>
          Text
        </LoadingButton>
      </Stack>
    </div>
  );
}

export default BasicLoading;
`;
