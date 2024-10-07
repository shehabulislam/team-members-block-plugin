import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import TeamMembersBlock from "./TeamMembersBlock";

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <TeamMembersBlock />
      <InnerBlocks
        allowedBlocks={["core/group"]}
        template={[
          [
            "core/group",
            {},
            [
              ["core/image", {}],
              ["core/heading", { level: 3, placeholder: "Member Name" }],
              ["core/paragraph", { placeholder: "Member Position" }],
            ],
          ],
        ]}
      />
    </div>
  );
}
