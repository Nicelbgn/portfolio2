import {useState} from "react"
export default function ToggleMode(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div >
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

