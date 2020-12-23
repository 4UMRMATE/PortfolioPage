import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Links(props) {
  return (
    <div>
      <a className="gitRepo" href={props.repo} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="gitPage" href={props.page} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    </div>
  );
}
