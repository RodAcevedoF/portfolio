import "./MailButton.css";

export const MailButton = (email) =>
  `<a href="mailto:${email}" id="mail-btn"><img src="/icons/mail.png" alt="email icon"><span>Say Hi!</span></a>`;
