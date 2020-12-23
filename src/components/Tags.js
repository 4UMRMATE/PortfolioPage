import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faSass,
  faCss3Alt,
  faJsSquare,
  faJs,
  faReact,
  faLinux,
  faGit,
  faBootstrap,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

export default function Tags(props) {
  return (
    <ul className="tags">
      {props.tags.map((tag, i) => {
        let tagIcon = faTags;
        let color = "#000";
        switch (tag) {
          case "html":
            tagIcon = faHtml5;
            color = "#dc4b27";
            break;
          case "css":
            tagIcon = faCss3Alt;
            color = "#0b6db2";
            break;
          case "scss":
            tagIcon = faSass;
            color = "#c86195";
            break;
          case "react":
            tagIcon = faReact;
            color = "#5ed3f3";
            break;
          case "js":
            tagIcon = faJsSquare;
            color = "#efd729";
            break;
          case "codehs":
            tagIcon = faJs;
            color = "#f7c031";
            break;
          case "git":
            tagIcon = faGit;
            color = "#e84d32";
            break;
          case "linux":
            tagIcon = faLinux;
            color = "#7d7d7d";
            break;
          case "bootstrap":
            tagIcon = faBootstrap;
            color = "#533b78";
            break;
          case "npm":
            tagIcon = faNpm;
            color = "#ca3e3e";
            break;
          default:
            color = "#349997";
        }
        return (
          <li
            key={"tag" + i}
            className="tag"
            style={{
              backgroundImage: `linear-gradient(90deg, gold -5%, ${color} 50%)`,
            }}
          >
            <FontAwesomeIcon icon={tagIcon} />
            <span> {tag.toUpperCase()}</span>
          </li>
        );
      })}
    </ul>
  );
}
