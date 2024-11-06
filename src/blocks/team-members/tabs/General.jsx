import React from "react";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { socialMedias } from "../constant";
import SocialMedia from "./PanelBody/SocialMedia";

export default function General({ attributes, setAttributes }) {
  const social = [];

  const updateSocialMedia = () => {};

  return (
    <>
      <SocialMedia updateSocialMedia={updateSocialMedia} social={social} />
    </>
  );
}
