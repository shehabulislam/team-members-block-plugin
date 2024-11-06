import { useBlockProps, RichText, MediaPlaceholder } from "@wordpress/block-editor";
import "./editor.scss";
// import TeamMembersBlock from "./TeamMembersBlock";
// import TeamSection from "./components/TeamSection";
// import CarouselSlider from "./components/CarouselSlider";
// import CardsWithBackground from "./components/CardsWithBackground";
// import TeamMembersCards from "./components/TeamMemberCards";
import Template1 from "./components/team-templates/Template1";
import { produce } from "immer";
import Settings from "./Settings";
import { useState, useEffect } from "react";
import Viewer from "./components/Viewer/Viewer";
import TeamProvider from "./TeamProvider";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { members } = attributes;
  const blockProps = useBlockProps();
  const [currentIndex, setCurrentIndex] = useState(null);

  const updateMember = (index, key, value) => {
    const modifiedMembers = produce(members, (draft) => {
      draft[0][key] = value;
    });

    setAttributes({ members: modifiedMembers });
  };

  useEffect(() => {
    console.log(currentIndex, attributes);
  }, [currentIndex]);

  return (
    <div {...blockProps}>
      <TeamProvider>
        <Settings {...props} updateMember={updateMember} />
        <Viewer attributes={attributes} onClick={(index) => setCurrentIndex(index)} RichText={RichText} updateMember={updateMember} MediaPlaceholder={MediaPlaceholder} />
      </TeamProvider>
      {/* <Template1 onClick={(index) => setCurrentIndex(index)} members={members} RichText={RichText} updateMember={updateMember} MediaPlaceholder={MediaPlaceholder} /> */}
    </div>
  );
}
