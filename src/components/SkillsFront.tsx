import "../css/skills.scss";
export default function SkillsFront() {
  const fronts = [
    {
      img: "/js.jpg",
      valeur: "JavaScript",
    },
    {
      img: "/next.png",
      valeur: "Next js",
    },
    {
      img: "/react.png",
      valeur: "React js",
    },

    {
      img: "/ts.png",
      valeur: "TypeScript",
    },
    {
      img: "/scss.png",
      valeur: "Scss",
    },
    {
      img: "/tailwind.png",
      valeur: "Tailwind css",
    },
  ];

  return (
    <div id="skills-card">
      {fronts.map((front) => (
        <div id="skills-card-display">
          <img src={front.img} alt="" />
          <h4>{front.valeur}</h4>
        </div>
      ))}
    </div>
  );
}
