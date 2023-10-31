import Content from "../components/Content";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <section >
      <div id="home-content">
        <SideBar />
        <Content />
      </div>
    </section>
  );
}
