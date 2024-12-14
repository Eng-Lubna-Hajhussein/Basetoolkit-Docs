export const source = `
import * as React from "react";
import {
  prefixer,
  rtlPlugin,
  CacheProvider,
  createCache,
  cssInjection as styled,
  Box,
  FormControlLabel,
  Switch,
  useCSSClass,
} from "@basetoolkit/ui";

const Normal = styled("div")\`
  text-align: left;
\`;

const Noflip = styled("div")\`
  /* @noflip */
  text-align: left;
\`;

const rtlCache = createCache({
  key: "rtl-key",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "ltr-key",
});

export default function RtlOptOut() {
  const [rtl, setRtl] = React.useState(false);

  const handleChange = () => {
    setRtl(!rtl);
  };

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <FormControlLabel
        control={<Switch onChange={handleChange} />}
        label="Toggle RTL"
      />
      <CacheProvider value={rtl ? rtlCache : ltrCache}>
        <Box sx={{ flexGrow: 1, mx: 2 }} dir={rtl ? "rtl" : ""}>
          <Normal>RTL normal behavior</Normal>
          <Noflip>RTL noflip</Noflip>
        </Box>
      </CacheProvider>
    </Box>
  );
}
`;
