import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import "./style.scss";
import TeamProvider from "./TeamProvider";

registerBlockType(metadata.name, {
  edit: EditWithProvider,
  save: () => null, // Dynamic block, so we use PHP render
});

export function EditWithProvider(props) {
  return (
    <TeamProvider>
      <Edit {...props} />
    </TeamProvider>
  );
}
