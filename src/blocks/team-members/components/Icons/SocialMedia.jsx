import DribbbleIcon from "./DribbbleIcon";
import FacebookIcon from "./FacebookIcon";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";

export default function SocialMedia({ social }) {
  return (
    <>
      <ul className="flex space-x-4 sm:mt-0">
        <li>
          <a href="#" className="text-gray-500 hover:text-white">
            <FacebookIcon height="20" width="20" />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-white">
            <DribbbleIcon />
          </a>
        </li>
      </ul>
    </>
  );
}
