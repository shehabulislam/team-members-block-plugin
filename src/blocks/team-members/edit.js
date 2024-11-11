import { useBlockProps, RichText, MediaPlaceholder } from "@wordpress/block-editor";
import { useEffect } from "react";
import "./editor.scss";
// import TeamMembersBlock from "./TeamMembersBlock";
// import TeamSection from "./components/TeamSection";
// import CarouselSlider from "./components/CarouselSlider";
// import CardsWithBackground from "./components/CardsWithBackground";
// import TeamMembersCards from "./components/TeamMemberCards";
import { produce } from "immer";
import Settings from "./Settings";
import Viewer from "./components/Viewer/Viewer";
import { useTeamState } from "./TeamProvider";

export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { members } = attributes;
  const blockProps = useBlockProps();

  const { teamState, setTeamState } = useTeamState();
  const { currentIndex } = teamState;

  const updateMember = (key, value) => {
    const modifiedMembers = produce(members, (draft) => {
      draft[currentIndex][key] = value;
    });

    setAttributes({ members: modifiedMembers });
  };

  const removeSocialMedia = (i) => {
    const social = members[currentIndex].social;
    const draft = produce(social, (draft) => {
      draft.splice(i, 1);
    });
    updateMember("social", draft);
  };

  // const addSocialMedia = () => {
  //   const social = members[currentIndex].social;
  //   const draft = produce(social, (draft) => {
  //     draft.splice(social.length, 1);
  //   });
  //   updateMember("social", draft);
  // };

  const addSocialMedia = () => {
    const social = members[currentIndex].social;
    const draft = produce(social, (draft) => {
      draft.splice(social.length, 0, { label: "social", value: "facebook" });
    });
    updateMember("social", draft);
  };

  useEffect(() => {
    setTeamState((prevState) => ({ ...prevState, updateMember, removeSocialMedia, addSocialMedia }));

    console.log(attributes);
  }, []);

  return (
    <div {...blockProps}>
      <Settings {...props} updateMember={updateMember} />
      <Viewer attributes={attributes} RichText={RichText} updateMember={updateMember} MediaPlaceholder={MediaPlaceholder} />
      {/* <Template1 onClick={(index) => setCurrentIndex(index)} members={members} RichText={RichText} updateMember={updateMember} MediaPlaceholder={MediaPlaceholder} /> */}
    </div>
  );
}
