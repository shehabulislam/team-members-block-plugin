import { useTeamState } from "../../TeamProvider";
import Heading from "../Heading";
import SocialMedia from "../Icons/SocialMedia";

export default function TeamMembersCards({ members, ...restProps }) {
  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <div className="mb-6 grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:mb-16">
          {members.map((member, i) => (
            <Member key={`member-${i}`} member={member} index={i} {...restProps} />
          ))}
        </div>
      </section>
    </>
  );
}

export function Member({ member, index, RichText, updateMember }) {
  const { name, social, role, bio, image } = member;

  const { teamState, setTeamState } = useTeamState();
  const { currentIndex } = teamState;
  // console.log(teamState);

  return (
    <>
      <div className={`items-center bg-gray-50 rounded-lg shadow sm:flex ${currentIndex === index ? "border border-gray-700" : ""}`} onClick={() => setTeamState((prevState) => ({ ...prevState, currentIndex: index }))}>
        <a href="#" className="min-w-48 md:max-w-48 h-full">
          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:!h-full object-cover" src={image.url} alt={image.alt} />
        </a>
        <div className="p-5">
          <h3
            className="text-xl font-bold tracking-tight text-gray-900 
          "
          >
            <RichText tagName="a" value={name} className="!no-underline" href="#" onChange={(name) => updateMember("name", name)} />
          </h3>
          <RichText tagName="span" value={role} onChange={(value) => updateMember("role", value)} />
          <RichText tagName="p" className="mt-3 mb-4 font-light " value={bio} onChange={(value) => updateMember("bio", value)} />
          <SocialMedia social={social} />
        </div>
      </div>
    </>
  );
}
