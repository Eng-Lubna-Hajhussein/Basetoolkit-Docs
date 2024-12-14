import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  TextField,
  rtlPlugin,
  prefixer,
  CacheProvider,
  createCache,
} from "@basetoolkit/ui";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "rtl-key",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RtlDemo() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <TextField
            dir="rtl"
            label="ملصق"
            placeholder="العنصر النائب"
            helperText="هذا نص مساعد"
            variant="outlined"
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
