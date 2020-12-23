// title, src, alt, projects [title, image, desc, tags, repo, page]
import pseudoDB from "../pseudoDB.json";
import Project from "./Project";

export default function PopupCat(props) {
  return (
    <div id="popup-window" style={props.popup}>
      <div id="popup-content" className="animate">
        <span id="close">&times;</span>
        <div
          className="popup-projects"
          style={
            (props.popup,
            {
              backgroundImage: `linear-gradient(62deg, #000 0%, ${props.color} 100%)`,
            })
          }
        >
          <h1 className="category-title" style={{ color: "whitesmoke" }}>
            {props.category}
          </h1>
          {pseudoDB
            .filter((item) => item.title === props.category)
            .map((item) =>
              item.projects.map((project, i) => (
                <Project key={i} project={project} color={props.color} />
              ))
            )}
        </div>
      </div>
    </div>
  );
}
