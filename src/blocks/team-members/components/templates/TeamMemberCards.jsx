import Heading from "../Heading";
import SocialMedia from "../Icons/SocialMedia";

export default function TeamMembersCards({ members }) {
  return (
    <>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <Heading />
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            {members.map((member) => {
              const { name, position, bio } = member;
              return (
                <>
                  <div className="items-center rounded-lg border-gray-700 bg-gray-800 shadow sm:flex">
                    <a href="#">
                      <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                    </a>
                    <div className="p-5">
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        <a className="!no-underline text-xl font-bold tracking-tight text-white" href="#">
                          {name}
                        </a>
                      </h3>
                      <span className="text-gray-400">{position}</span>
                      <p className="mb-4 mt-3 font-light text-gray-400">{bio}</p>
                      <SocialMedia />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
