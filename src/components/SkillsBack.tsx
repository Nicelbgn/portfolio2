import "../css/skills.scss";
export default function SkillsBack(){
  const backs = [
    {
      img: "/node.png",
      valeur: "Node js",
    },
    {
      img: "/express.png",
      valeur: "Express js",
    },
    {
      img: "/prisma.png",
      valeur: "Prisma ORM",
    },

    {
      img: "/sql.png",
      valeur: "Sql",
    },
    {
      img: "/mongo.png",
      valeur: "Mongo Db",
    },
  ];

  return (
    <div id="skills-card">
      {backs.map((back) => (
        <div id="skills-card-display">
          <img src={back.img} alt="" />
          <h4>{back.valeur}</h4>
        </div>
      ))}
    </div>
  );
}
                    