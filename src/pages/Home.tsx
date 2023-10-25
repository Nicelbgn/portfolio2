import Content from "../components/Content";
import SideBar from "../components/SideBar";
import "../css/home.scss"

export default function Home(){
    return(
        <div id="home-content">
            <div id="side">
                 <SideBar/>
            </div>
           
            <Content />
        </div>
    )
}