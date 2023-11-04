import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
import "../css/nav_resposnsive.scss";
export default function NavResponsive() {
  return (
    <>
      <Nav />
      <div id="social">
        <h3>MES RESEAUX</h3>
        <SocialMedia />
      </div>
    </>
  );
}
