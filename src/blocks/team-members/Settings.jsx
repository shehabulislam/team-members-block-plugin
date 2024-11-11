import React from "react";

import { BlockControls, InspectorControls, MediaPlaceholder } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { ToolbarButton, ToolbarGroup, TabPanel, Dropdown, Button } from "@wordpress/components";
import { produce } from "immer";
import { demoMember } from "./constant";
import General from "./tabs/General";
import Style from "./tabs/Style";
import tabController from "../../utils/tabController";
import { useTeamState } from "./TeamProvider";

export default function Settings({ attributes, setAttributes, updateMember }) {
  const { members } = attributes;

  const { teamState } = useTeamState();
  const { currentIndex } = teamState;

  const addMember = () => {
    const modifiedMembers = produce(members, (draft) => {
      draft.push(demoMember);
    });

    setAttributes({ members: modifiedMembers });
  };

  const removeMember = (i) => {
    const draft = produce(members, (draft) => {
      draft.splice(i, 1);
    });
    setAttributes({ members: draft });
  };

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="tmbp-tab-panel"
          activeClass="active"
          onSelect={tabController}
          tabs={[
            {
              name: "general",
              title: __("General", "team-members-block-plugin"),
              className: "general",
            },
            {
              name: "style",
              title: __("Style", "advanced-panorama-360-viewer"),
              className: "style",
            },
          ]}
        >
          {(tab) => {
            return (
              <span>
                {tab.name === "general" && <General attributes={attributes} setAttributes={setAttributes} updateMember={updateMember} />}
                {tab.name === "style" && <Style attributes={attributes} setAttributes={setAttributes} />}
              </span>
            );
          }}
        </TabPanel>
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup className="bPlToolbar">
          <ToolbarButton label={__("Add New Member", "team-section")} onClick={addMember}>
            Add Member
          </ToolbarButton>

          {/* <ToolbarButton label={__("Add New Member", "team-section")} onClick={addMember}></ToolbarButton> */}
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton className="bg-red-500 text-white" label={__("Remove Member", "team-section")} onClick={() => removeMember(currentIndex)}>
            Remove Member
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            popoverProps={{ placement: "bottom-start" }}
            renderToggle={({ isOpen, onToggle }) => (
              <Button icon="format-image" onClick={onToggle} aria-expanded={isOpen}>
                {/* Toggle Popover! */}
              </Button>
              // <Dashicon icon="upload" onClick={onToggle} aria-expanded={isOpen} />
            )}
            renderContent={() => (
              <>
                <MediaPlaceholder
                  className="tmbp-toolbar-uploader"
                  onSelect={({ url, alt }) => {
                    updateMember("image", { url, alt });
                  }}
                  onSelectURL={(url) => {
                    updateMember("image", { url });
                  }}
                  allowedTypes={["image"]}
                  multiple={false}
                  labels={{ title: "" }}
                  icon="format-image"
                />{" "}
              </>
            )}
          />
        </ToolbarGroup>
        {/* <AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Alert Alignment')} alignmentControls={[
				{ title: __('Alert in left', 'b-blocks'), align: 'left', icon: 'align-left' },
				{ title: __('Alert in center', 'b-blocks'), align: 'center', icon: 'align-center' },
				{ title: __('Alert in right', 'b-blocks'), align: 'right', icon: 'align-right' }
			]} /> */}
      </BlockControls>
    </>
  );
}
