import Content from "../components/Content";
import SideBar from "../components/SideBar";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  


  return (
    <section>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className={isDarkMode ? "dark-mode" : "light-mode"} id="home-content">
        <SideBar />
        <Content />
      </div>
    </section>
  );
}
