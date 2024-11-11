import { PanelBody, TextareaControl, TextControl } from "@wordpress/components";
import React from "react";
import { __ } from "@wordpress/i18n";

export default function Member({ member, updateMember }) {
  const { name, bio, role } = member || {};

  return (
    <PanelBody title={name || __("Member", "text-domain")} initialOpen={true}>
      <TextControl label={__("Name", "text-domain")} value={name} placeholder="Name" onChange={(name) => updateMember("name", name)} />
      <TextControl label={__("Role", "text-domain")} value={role} placeholder="Role" onChange={(role) => updateMember("role", role)} />
      <TextareaControl label={__("Bio", "text-domain")} value={bio} placeholder="Bio" onChange={(bio) => updateMember("bio", bio)} />
    </PanelBody>
  );
}
