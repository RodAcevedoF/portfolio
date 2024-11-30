import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("../../public/icons/x.png", "X", "https://x.com")}
${Button("../../public/icons/github.jpg", "GitHub", "https://github.com")}
${Button("../../public/icons/linkedin.jpg", "LinkedIn", "https://linkedin.com")}
${Button(
  "../../public/icons/telegram.png",
  "Telegram",
  "https://web.telegram.org/"
)}
</div>
`;
