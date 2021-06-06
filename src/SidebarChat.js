import React, {useEffect,useState} from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './SidebarChat.css'
function SidebarChat({addNewChat}) {
    const [seed, setSeed]  = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);

    const createChat = () => {
        const roomname = prompt("Enter the room name")
        if(roomname){

        }
    }
    
    return !addNewChat ? (
        <div className='SidebarChat'>
            <IconButton>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            </IconButton>
            <div className="SidebarChat_info">
                <h2>Room Name</h2>
                <p>Last message</p>
            </div>
        </div>
    ) :
    (
        <div onClick = {createChat} className="SidebarChat">
            <h1>Add New Chat</h1>
        </div>
    )
}

export default SidebarChat