import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/x.png", "X", "https://x.com")}
${Button("/icons/github.jpg", "GitHub", "https://github.com")}
${Button("/icons/linkedin.jpg", "LinkedIn", "https://linkedin.com")}
${Button(
  "/icons/telegram.png",
  "Telegram",
  "https://web.telegram.org/"
)}
</div>
`;
