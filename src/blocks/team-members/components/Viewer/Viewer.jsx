import PropTypes from "prop-types"; // Import PropTypes
import Template1 from "../team-templates/Template1";
import TeamMembersCards from "../team-templates/TeamMemberCards";

const templates = {
  template1: Template1,
  template2: TeamMembersCards,
};

export default function Viewer({ attributes, ...restProps }) {
  const { template, members } = attributes;

  // Check if the template exists and fallback to a default template or error handling
  const Template = templates["template2"] || (() => <div>No template found</div>);

  return (
    <>
      <Template members={members} {...restProps} />
    </>
  );
}
