import "../css/sideBar.scss";
export default function SideBar() {
  return (
    <section>
      <div id="side-bar-container">
        <div id="avatar">
          <img src="/avatar.jpg" alt="" />
        </div>
        <h1>BILALY CISSOKHO</h1>
        <h2>DEVELOPPEUR WEB</h2>
        <a><img src="/about.png" alt="" />A propos</a>
        <a><img src="/skills.png" alt="" />Compétences</a>
        <a><img src="/project.png" alt="" />Projets</a>
        <a><img src="/contact.png" alt="" />Me contacter</a>
        <h3>MES RESEAUX</h3>
        <div>
          <a><img src="/linkedin.png" alt="" /></a>
          <a><img src="/git.png" alt="" /></a>
          <a><img src="/cv.png" alt="" /></a>
        </div>
      </div>
    </section>
  );
}
