import "./style.css";
import { changeTheme, changeThemes } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { Divider } from "./components/Divider/Divider";
import { changePage } from "./utils/changePage";
import { burgerBtn } from "./components/Navbar/Navbar";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", () => changePage(Home));
linkPage("#projectslink", () => changePage(Projects));
linkPage("#aboutlink", () => changePage(About));

linkPage("#homelinkB", () => changePage(Home));
linkPage("#projectslinkB", () => changePage(Projects));
linkPage("#aboutlinkB", () => changePage(About));

changePage(Home);

changeTheme();
changeThemes();
burgerBtn();

footer.insertAdjacentHTML("beforebegin", Divider());
