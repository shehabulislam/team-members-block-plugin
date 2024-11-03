import { registerBlockType } from "@wordpress/blocks";
import { useSelect, useDispatch } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

registerBlockType("custom/child-block", {
  title: __("Custom Child Block"),
  icon: "smiley",
  category: "common",
  edit: ({ clientId }) => {
    const { getBlockParentsByBlockName } = useSelect((select) => select("core/block-editor"));
    const { insertBlock } = useDispatch("core/block-editor");

    // useEffect(() => {
    //   const hasGroupParent = getBlockParentsByBlockName(clientId, "core/group").length > 0;

    //   if (!hasGroupParent) {
    //     const groupBlock = wp.blocks.createBlock("core/group", {}, [wp.blocks.createBlock("custom/child-block")]);
    //     console.log(groupBlock);
    //     insertBlock(groupBlock, undefined, clientId, false);
    //   }
    // }, [clientId]);

    return (
      <div style={{ border: "1px dashed #ccc", padding: "10px" }}>
        <p>{__("Custom Child Block Content")}</p>
        {/* <InnerBlocks
          templateLock={false}
          template={[["core/navigation", { className: `` }]]}
          allowedBlocks={["core/navigation"]}
          renderAppender={select("core/block-editor").getBlock(clientId)?.innerBlocks.length < 1 ? InnerBlocks.ButtonBlockAppender : false}
        /> */}
        <InnerBlocks templateLock={false} template={[["core/group", { className: `` }]]} allowedBlocks={["core/navigation"]} renderAppender={InnerBlocks.ButtonBlockAppender} />
      </div>
    );
  },
  save: () => null,
});
