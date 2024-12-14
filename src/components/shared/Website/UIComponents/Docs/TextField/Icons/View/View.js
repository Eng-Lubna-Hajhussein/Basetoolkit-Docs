import * as React from "react";
import {
  Box,
  TextField,
  InputLabel,
  InputAdornment,
  FormControl,
  SvgIcon,
} from "@basetoolkit/ui";

export default function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 3 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <TextField
          id="input-with-icon-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon icon="email" variant="filled" />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        shrink
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon icon="email" variant="filled" />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: "flex", alignItems: "flex-end",width:300 }}>
        <SvgIcon
          icon="email"
          variant="filled"
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
        />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  );
}
