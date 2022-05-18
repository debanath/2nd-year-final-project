import "./message.css";
import { format } from "timeago.js";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Message({message,own ,currentId}) {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const {user : currentUser}=useContext(AuthContext);
  return ( 
    <div className = { own ? "message own" : "message" }>
        <div className="messageTop">

            <img className="messageImg" src={own? (currentUser.profilePicture ? PF + currentUser.profilePicture :  PF + "person/noAvatar.png") : PF + "person/noAvatar.png"} alt="" />
            <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
