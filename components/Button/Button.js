import "./Button.css";

export const Button = (icon, text, url) => `
<a href=${url} class="my-btn" target="_blank"
          rel="noopener noreferrer">
<img src=${icon} alt='${text} icon'/>
</a>
`;
