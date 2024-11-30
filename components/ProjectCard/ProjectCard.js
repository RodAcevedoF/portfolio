import "./ProjectCard.css";

const techImg = (project) => {
  return project.tech
    .map(
      (elem) =>
        `<img src="${elem.image}" alt="${elem.name}" title="${elem.name}" >`
    )
    .join("");
};

export const ProjectCard = (project) => `
<div class="project-card">
  <img src="${project.image}" alt="${project.title}" />
  <div class="header">
    <h2>${project.title}</h2>
    <div>
      <a href="${project.github}" target="_blank"
          rel="noopener noreferrer">
        <img src="/icons/github.jpg" alt="GitHub Icon" />
      </a>
      <a href="${project.link}" target="_blank"
          rel="noopener noreferrer">
        <img src="/icons/link.jpg" alt="Link icon" />
      </a>
    </div>
  </div>
  <div class="detail">
    <p>${project.description}</p>
    <div class="div-tech">
      ${techImg(project)}
    </div>
  </div>
</div>
`;
