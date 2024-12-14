import * as React from "react";
import { FormControlLabel, LoadingButton, Switch } from "@basetoolkit/ui";

function CustomDelay() {
  const [loading, setLoading] = React.useState(false);

  const handleAction = () => {
    setTimeout(() => setLoading(!loading), 500);
  };

  return (
    <div>
      <FormControlLabel
        sx={{ display: "block" }}
        control={
          <Switch
            checked={loading}
            onChange={handleAction}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <LoadingButton
        variant="contained"
        loading={loading}
        onClick={handleAction}
      >
        Delayed Load
      </LoadingButton>
    </div>
  );
}

export default CustomDelay;
