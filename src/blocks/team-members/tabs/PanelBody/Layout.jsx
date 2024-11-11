import { PanelBody } from "@wordpress/components";
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import React from "react";
import { __ } from "@wordpress/i18n";
import { select } from "@wordpress/data";
import { produce } from "immer";

export default function Layout({ layout, setAttributes }) {
  const device = select("core/edit-post").__experimentalGetPreviewDeviceType();
  const columns = layout.columns[device] || 3;

  const updateDevice = (value) => {
    const draft = produce(layout, (draft) => {
      draft.columns[device] = value;
    });
    setAttributes({ layout: draft });
  };

  return (
    <PanelBody>
      <NumberControl label={__("Columns", "text-domain")} isShiftStepEnabled={true} onChange={(value) => updateDevice(value)} shiftStep={1} value={columns} />
    </PanelBody>
  );
}
