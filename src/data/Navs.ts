export const navs = [
  {
    img: "/about.webp",
    text: "A propos",
    anchor: () => {
      window.location.href = "#about";
    },
    alt: "about"
  },
  {
    img: "/skills.webp",
    text: "Compétences",
    anchor: () => {
      window.location.href = "#skills";
    },
    alt: "competences"
  },
  {
    img: "/projects.webp",
    text: "Projets",
    anchor: () => {
      window.location.href = "#my-projects";
    },
    alt: "projets"
  },
  {
    img: "/contact.webp",
    text: "Me contacter",
    anchor: () => {
      window.location.href = "#contact";
    },
    alt: "contact"
  },
];
