import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Divider } from "../../components/Divider/Divider";
import { Title } from "../../components/Title/Title";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    ${Title("FEATURED", "Projects")}
    ${Divider()}
    <div class="projects-container"></div>
    </section>`;

  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);

    const cardImg = document.querySelectorAll(".project-card > img");

    cardImg.forEach((img, index) => {
      img.addEventListener("mouseover", () => {
        img.classList.add("hovering");
        img.src = projects[index].imageB;
      });
      img.addEventListener("mouseout", () => {
        img.classList.remove("hovering");
        img.src = projects[index].image;
      });
    });
  }
};
