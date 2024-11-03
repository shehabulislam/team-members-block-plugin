import React from "react";

import { BlockControls, InspectorControls, MediaPlaceholder } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { ToolbarButton, Dashicon, ToolbarGroup, TabPanel, Dropdown, Button } from "@wordpress/components";
import { produce } from "immer";
import { demoMember } from "./const";
import General from "./tabs/General";
import Style from "./tabs/Style";
import tabController from "../../utils/tabController";

export default function Settings({ attributes, setAttributes, updateMember }) {
  const { members } = attributes;

  const addMember = () => {
    const modifiedMembers = produce(members, (draft) => {
      draft.push(demoMember);
    });

    setAttributes({ members: modifiedMembers });
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
                {tab.name === "general" && <General attributes={attributes} setAttributes={setAttributes} />}
                {tab.name === "style" && <Style attributes={attributes} setAttributes={setAttributes} />}
              </span>
            );
          }}
        </TabPanel>
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup className="bPlToolbar">
          <ToolbarButton label={__("Add New Member", "team-section")} onClick={addMember}>
            <Dashicon icon="plus" />
          </ToolbarButton>
          <ToolbarButton label={__("Add New Member", "team-section")} onClick={addMember}></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            popoverProps={{ placement: "bottom-start" }}
            renderToggle={({ isOpen, onToggle }) => (
              <Button icon="upload" onClick={onToggle} aria-expanded={isOpen}>
                {/* Toggle Popover! */}
              </Button>
              // <Dashicon icon="upload" onClick={onToggle} aria-expanded={isOpen} />
            )}
            renderContent={() => (
              <>
                <MediaPlaceholder
                  onSelect={(el) => {
                    updateMember(0, "image", el.url);
                  }}
                  onSelectURL={(url) => {
                    updateMember(0, "image", url);
                  }}
                  allowedTypes={["image"]}
                  multiple={false}
                  labels={{ title: "" }}
                  icon="image"
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
