export const source = `
import * as React from "react";
import { cssInjection, SvgIcon } from "@basetoolkit/ui";
import { Button } from "@basetoolkit/ui";

const HiddenFileInput = cssInjection("input")({
  display: "none",
});

function FileUploadButton() {
  const handleFileChange = (event) => {
    console.log(event.target.files);
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<SvgIcon icon="file_upload" color="common.white" />}
    >
      Upload Files
      <HiddenFileInput type="file" multiple onChange={handleFileChange} />
    </Button>
  );
}

export default FileUploadButton;
`;
