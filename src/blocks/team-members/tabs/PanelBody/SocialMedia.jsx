import { PanelBody, SelectControl } from "@wordpress/components";
import React from "react";
import { __ } from "@wordpress/i18n";
import { socialMedias } from "../../constant";
import { useTeamState } from "../../TeamProvider";

export default function SocialMedia({ social, updateSocialMedia }) {
  const { teamState } = useTeamState();
  console.log(teamState);
  return (
    <PanelBody title={__("Social Media", "text-domain")}>
      {Array.isArray(social) &&
        social.map((item, i) => (
          <>
            <PanelBody title={social.name || "Name"} initialOpen={false} key={i}>
              <SelectControl options={socialMedias} value={item.name} onChange={(value) => updateSocialMedia("name", value, i)} />
            </PanelBody>
          </>
        ))}
    </PanelBody>
  );
}
