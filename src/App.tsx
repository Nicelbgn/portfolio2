import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<SideBar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
