import "./Navbar.css";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { ColorNav } from "../ColorNav/ColorNav";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const themeBtnB = document.querySelector("#themeBtnB");
  themeBtn.addEventListener("click", () => {
    const contColor = document.querySelector(".content-color");
    contColor.classList.toggle("drop");
  });
  themeBtnB.addEventListener("click", () => {
    const contColor = document.querySelector(".content-color");
    contColor.classList.toggle("drop");
  });
};
export const changeThemes = () => {
  const darkTheme = document.querySelector(".dark-li");
  darkTheme.addEventListener("click", () => {
    document.body.classList.remove("light");
    document.body.classList.remove("tloz");
  });

  const lightTheme = document.querySelector(".light-li");
  lightTheme.addEventListener("click", () => {
    document.body.classList.remove("tloz");
    document.body.classList.toggle("light");
  });

  const tlozTheme = document.querySelector(".tloz-li");
  tlozTheme.addEventListener("click", () => {
    document.body.classList.remove("light");
    document.body.classList.toggle("tloz");
  });
};

export const burgerBtn = () => {
  const burgerButton = document.querySelector(".btn-burger");
  burgerButton.addEventListener("click", () => {
    let firstSpan = document.querySelector(".btn-burger span:first-child");
    let midSpan = document.querySelector(".btn-burger span:nth-child(2)");
    let lastSpan = document.querySelector(".btn-burger span:last-child");
    let burgerUl = document.querySelector(".burger-ul");
    firstSpan.classList.toggle("anim-first");
    midSpan.classList.toggle("anim-mid");
    lastSpan.classList.toggle("anim-last");
    burgerUl.classList.toggle("dropdown");
  });
};

export const Navbar = () => `
${ColorNav()}
<nav>
${ProfileButton()}
${BurgerMenu()}
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <a href="#" id="aboutlink">About</a>
    </li>
    <li>
        <button id="themeBtn"><img src="/public/icons/paint-bucket.png"></button>
    </li>
</ul>
<ul class="burger-ul">
     <li>
       <a href="#" id="homelinkB">Home</a>
     </li>
     <li>
       <a href="#" id="projectslinkB">Projects</a>
     </li>
     <li>
       <a href="#" id="aboutlinkB">About</a>
     </li>
  </ul>
</nav>

`;
