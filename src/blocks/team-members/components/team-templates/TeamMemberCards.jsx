import Heading from "../Heading";
import SocialMedia from "../Icons/SocialMedia";

export default function TeamMembersCards({ members }) {
  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <div className="mb-6 grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:mb-16">
          {members.map((member, i) => (
            <Member key={`member-${i}`} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}

export function Member({ member }) {
  const { name, position, role, bio } = member;
  return (
    <>
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
        <a href="#" className="min-w-48 h-full">
          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:!h-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
        </a>
        <div className="p-5">
          <h3
            className="text-xl font-bold tracking-tight text-gray-900 
          "
          >
            <a className="!no-underline" href="#">
              {name}
            </a>
          </h3>
          <span className="">{role}</span>
          <p className="mt-3 mb-4 font-light ">{bio}</p>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
