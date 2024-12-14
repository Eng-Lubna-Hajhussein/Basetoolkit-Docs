export const source = `
import * as React from "react";
import {
  Box,
  IconButton,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  TextField,
  SvgIcon,
  Grid,
} from "@basetoolkit/ui";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <TextField
            variant="outlined"
            id="outlined-adornment-weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            helperText="Weight"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <TextField
            value="outlined"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <SvgIcon icon="visibility_off" variant="filled" />
                    ) : (
                      <SvgIcon icon="visibility" variant="filled" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
          />
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            value="outlined"
            id="outlined-adornment-amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            label="Amount"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="filled"
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ width: "25ch" }} variant="filled">
          <TextField
            variant="filled"
            id="filled-adornment-weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <TextField
            variant="filled"
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <SvgIcon icon="visibility_off" variant="filled" />
                    ) : (
                      <SvgIcon icon="visibility" variant="filled" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth sx={{ my: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <TextField
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            id="filled-adornment-amount"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>

      <Grid item xs={6}>
        <FormControl variant="standard" sx={{ width: "25ch" }}>
          <TextField
            id="standard-adornment-weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <TextField
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? (
                      <SvgIcon icon="visibility_off" variant="filled" />
                    ) : (
                      <SvgIcon icon="visibility" variant="filled" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth sx={{ my: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <TextField
            id="standard-adornment-amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
`