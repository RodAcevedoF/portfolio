import "./Gallery.css";

export const Gallery = (hobby) =>
  `<div class="hobby-div">
<h3>${hobby.title}</h3>
<a href="${hobby.url}" target="_blank"
          rel="noopener noreferrer"><img src=${hobby.image} alt=${hobby.altTxt} id="hob-img" ></a>
<a href="${hobby.url}" class="fade-p" target="_blank"
          rel="noopener noreferrer"><p>${hobby.text}</p></a>
<div class="indiv">
<img src="/icons/share.png" alt="like icon">
<p>${hobby.likeNum}</p>
</div>
</div>`;
