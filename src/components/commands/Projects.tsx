import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Data Visualization",
    desc: "Data Visualization Using PowerBI",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYzdjNzI5MDEtZTU0Zi00ZWM1LTg5ZmItZjI4YjEwYzhjYjFkIiwidCI6ImZkNGIzMDE3LTkxOGYtNDA4Ny1hYzE0LTc0ZWQxNmY1MTRkZCIsImMiOjEwfQ%3D%3D",
  },
  {
    id: 2,
    title: "Note",
    desc: "Simple personal temporary note",
    url: "https://catet.netlify.app/",
  },
  {
    id: 3,
    title: "Coming Soon",
    desc: "Coming Soon",
    url: "#",
  },
  {
    id: 4,
    title: "Coming Soon",
    desc: "Coming Soon",
    url: "#",
  },
];

export default Projects;
