import DribbbleIcon from "./DribbbleIcon";
import FacebookIcon from "./FacebookIcon";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import TwitterIcon from "./TwitterIcon";

const media = {
  facebook: FacebookIcon,
  dribble: DribbbleIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function SocialMedia({ social }) {
  return (
    <>
      <ul className="flex space-x-4 sm:mt-0">
        {social.map((item) => {
          const MediaIcon = media[item.name?.toLowerCase()]; // Get the icon based on item.name

          return (
            <li key={item.name}>
              <a href={item.link || "#"} className="text-gray-500 hover:text-white">
                {MediaIcon ? (
                  <MediaIcon height="20" width="20" />
                ) : (
                  // Custom SVG if MediaIcon is not found
                  <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace the below path with your custom SVG path */}
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.478 22 2 17.522 2 12S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z" />
                  </svg>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
