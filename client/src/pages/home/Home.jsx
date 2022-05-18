import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
export default function Home(){
    return (
        // to use  multiple componets we devide it into fragments by puttin it in "<> </>"
        //using fragments
        <>      
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>

        </div>
        
        </>
    )
}