import { Button, PanelBody, SelectControl, TextControl } from "@wordpress/components";
import React from "react";
import { __ } from "@wordpress/i18n";
import { socialMedias } from "../../constant";
import { useTeamState } from "../../TeamProvider";
import { produce } from "immer";

export default function SocialMedia({ social, updateSocialMedia, updateMember }) {
  const { teamState } = useTeamState();

  const removeSocialMedia = (i) => {
    const draft = produce(social, (draft) => {
      draft.splice(i, 1);
    });
    updateMember("social", draft);
  };

  const addSocialMedia = () => {
    const draft = produce(social, (draft) => {
      draft.splice(social.length, 0, { label: "social", value: "" });
    });
    updateMember("social", draft);
  };

  return (
    <PanelBody title={__("Social Media", "text-domain")}>
      {Array.isArray(social) &&
        social.map((item, i) => (
          <>
            <PanelBody title={item.name || "Name"} initialOpen={false}>
              <SelectControl label={__("Social Media", "text-domain")} options={socialMedias} value={item.name} onChange={(value) => updateSocialMedia("name", value, i)} />
              <TextControl value={item.link} label={__("Link", "text-domain")} onChange={(value) => updateSocialMedia("link", value, i)} />
              <div className="flex justify-end">
                <Button onClick={() => removeSocialMedia(i)} className="button button-danger !text-white !bg-red-600">
                  Remove
                </Button>
              </div>
            </PanelBody>
          </>
        ))}
      <div className="flex justify-end">
        <Button onClick={addSocialMedia} className="button button-primary">
          Add New
        </Button>
      </div>
    </PanelBody>
  );
}
