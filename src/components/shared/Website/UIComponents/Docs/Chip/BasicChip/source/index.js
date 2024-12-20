export const source = `
import * as React from "react";
import {
  Avatar,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  SvgIcon,
} from "@basetoolkit/ui";

export default function BasicChips() {
  const [variant, setVariant] = React.useState("outlined");

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };
  const [size, setSize] = React.useState("medium");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const [icon, setIcon] = React.useState("none");

  const handleIconChange = (event) => {
    setIcon(event.target.value);
  };

  const [avatar, setAvatar] = React.useState("none");

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={3}>
      <Chip
        label="Outlined Variant"
        {...(icon !== "none"
          ? {
              icon: (
                <SvgIcon icon="account_circle" variant="filled" fontSize={20} />
              ),
            }
          : {})}
        {...(avatar !== "none"
          ? {
              avatar:
                avatar === "letter" ? (
                  <Avatar height={20} width={20}>
                    M
                  </Avatar>
                ) : (
                  <Avatar
                    alt="Natacha"
                    src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
                    height={20}
                    width={20}
                  />
                ),
            }
          : {})}
        variant={variant}
        size={size}
      />
      <Stack direction="row" alignItems="start" spacing={4}>
        <FormControl row>
          <FormLabel color="default">variant</FormLabel>
          <RadioGroup value={variant} onChange={handleVariantChange}>
            <FormControlLabel
              value="outlined"
              control={<Radio />}
              label="outlined"
            />
            <FormControlLabel
              value="filled"
              control={<Radio />}
              label="filled"
            />
          </RadioGroup>
        </FormControl>
        <FormControl row>
          <FormLabel color="default">size</FormLabel>
          <RadioGroup value={size} onChange={handleSizeChange}>
            <FormControlLabel value="small" control={<Radio />} label="small" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="medium"
            />
            <FormControlLabel value="large" control={<Radio />} label="large" />
          </RadioGroup>
        </FormControl>
        <FormControl row>
          <FormLabel color="default">icon</FormLabel>
          <RadioGroup value={icon} onChange={handleIconChange}>
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="icon" control={<Radio />} label="icon" />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack direction="row" alignItems="start" spacing={4}>
        <FormControl row>
          <FormLabel color="default">avatar</FormLabel>
          <RadioGroup value={avatar} onChange={handleAvatarChange}>
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel
              value="letter"
              control={<Radio />}
              label="letter"
            />
            <FormControlLabel value="img" control={<Radio />} label="img" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>
  );
}
`;
