import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { MailButton } from "../../components/MailButton/MailButton";
import { Title } from "../../components/Title/Title";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    ${Title("HI! MY NAME IS RODRIGO", "I make Websites")}
    <p>I’m a Web Development student splitting my time between Spain and Germany. I’m passionate about bringing ideas to life online, from crafting websites to building creative digital projects. Over the past year, I’ve immersed myself in the foundations of web development, gaining valuable knowledge and a growing skill set along the way.</p>
    ${MailButton("raacevedof@gmail.com")}
    </section>`;
};
