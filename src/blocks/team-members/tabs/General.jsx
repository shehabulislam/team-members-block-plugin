import React, { useEffect } from "react";
import { PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import { socialMedias } from "../constant";
import SocialMedia from "./PanelBody/SocialMedia";
import { useTeamState } from "../TeamProvider";
import Member from "./PanelBody/Member";
import Layout from "./PanelBody/Layout";

export default function General({ attributes, setAttributes, updateMember }) {
  const { members, layout } = attributes;
  const { teamState } = useTeamState();
  const social = members[teamState.currentIndex]?.social || [];

  const updateSocialMedia = (key, value, i) => {
    console.log({ key, value, i });
    const draft = produce(social, (draft) => {
      draft[i][key] = value;
    });
    updateMember("social", draft);
  };

  useEffect(() => {
    console.log(social);
  }, [teamState.currentIndex]);

  return (
    <>
      <Layout layout={layout} setAttributes={setAttributes} />
      <Member member={members[teamState.currentIndex]} updateMember={updateMember} />
      <SocialMedia updateSocialMedia={updateSocialMedia} social={social} updateMember={updateMember} />
    </>
  );
}
