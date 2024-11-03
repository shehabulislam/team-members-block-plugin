import Heading from "../Heading";
import SocialMedia from "../Icons/SocialMedia";

export default function TeamMembersCards({ members }) {
  return (
    <>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            {members.map((member, i) => (
              <Member key={`member-${i}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Member({ member }) {
  const { name, position, bio } = member;
  return (
    <>
      <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="min-w-48 h-full">
          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg !h-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Bonnie Green</a>
          </h3>
          <span className="text-gray-500 dark:text-gray-400">CEO &amp; Web Developer</span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">I Bonnie drives the technical strategy of the flowbite platform and brand.</p>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
