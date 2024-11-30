import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { hobbies } from "../../data/hobbies";
import { Gallery } from "../../components/Gallery/Gallery";
import { Title } from "../../components/Title/Title";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
      <section class="about">
        ${Title("A LITTLE BIT MORE...", "About me")}
        <p>
          Besides all the coding, folders, and tons of study, I've been 
          a professional musician, physicist, and a certified powerlifting coach. 
          Thanks to this, I've had the opportunity to travel across the world, 
          visit lots of diverse cities, and meet many wonderful people.
        </p>
      </section>
      <section class="hobby-section">
      </section>
    `;

  const hobSection = document.querySelector(".hobby-section");
  for (const hobby of hobbies) {
    const card = Gallery(hobby);
    hobSection.insertAdjacentHTML("afterbegin", card);
  }
};
