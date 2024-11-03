import { createRoot } from "react-dom";
import TeamMembersCards from "./components/team-templates/TeamMemberCards";

import "./style.scss";
import Template1 from "./components/team-templates/Template1";

document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".wp-block-tmbp-team-members");
  blocks.forEach((viewer) => {
    const attributes = JSON.parse(viewer.dataset.attributes);
    viewer.removeAttribute("data-attributes");

    const root = createRoot(viewer);
    root.render(<View attributes={attributes} />);
  });
});

const templates = {
  Template1,
};

export function View({ attributes }) {
  const { members, template } = attributes;
  const SelectedTemplate = templates[template] || null;
  return <>{SelectedTemplate ? <SelectedTemplate members={members} MediaPlaceholder={MediaPlaceholder} RichText={RichText} /> : <h2>Template not found</h2>}</>;
}

export function MediaPlaceholder({ image, ...restProps }) {
  return (
    <>
      <img src={image} {...restProps} />
    </>
  );
}

export function RichText({ tag: Tag = "p", value = "" }) {
  return <Tag>{value}</Tag>;
}
