import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'; 
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'
import db from './firebaseConfig'
function Sidebar() {
    const [room , setRoom] = useState([])
    useEffect(() => {
        db.collection('rooms').onSnapShot((snapshot) => 

        setRoom(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data:doc.data()
                }
            )
            )
        )
            )
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <IconButton>
                    <Avatar />
                </IconButton>
                
                <div className='sidebar_header_right'>
                    <IconButton>
                        <DonutLargeIcon />    
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_seachcontainer">
                    <SearchIcon />
                    <input placeholder="Start a new conversation" type="text" />
                    
                </div>
                
            </div>
            <div className='sidebar_chat'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>




        </div>
    )
}

export default Sidebar