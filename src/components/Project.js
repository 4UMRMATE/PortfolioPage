import Tags from "./Tags";
import Links from "./Links";

export default function Project(props) {
  return (
    <div className="Project">
      <div className="project-img">
        <img
          className="img-fluid"
          src={props.project.image}
          alt=""
          width="500"
          height="500"
        ></img>
      </div>
      <div className="info">
        <h3 className="project-title">{props.project.title}</h3>
        <div>
          <h5>Tags:</h5>
          <Tags tags={props.project.tags} />
        </div>
        <div>
          <h5>Description:</h5>
          <h6>{props.project.description}</h6>
        </div>
        <Links repo={props.project.repo} page={props.project.page} />
      </div>
    </div>
  );
}
