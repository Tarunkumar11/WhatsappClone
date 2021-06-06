import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
function Chat() {
    return (
        <div className='chat'>
            <div className='chat_header'>
                <IconButton>
                    <Avatar />
                </IconButton>
                
                {/* <div className='sidebar_header_right'>
                
                </div> */}
            </div>

            <div className='chat_body'>


            </div>

            <div className='chat_footer'>

            </div>
        </div>

    
    )
}

export default Chat
