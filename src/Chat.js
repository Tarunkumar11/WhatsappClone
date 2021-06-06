import React, { useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Chatmessage from './Chatmessage';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

function Chat() {

    const [input , setInput] =  useState("")
    const sendMessage = (e) => {
        e.preventDefault()
        console.log("You typed >>",input)
        setInput("")
    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <IconButton>
                    <Avatar />
                </IconButton>
                
                <div className='chat_header_left'>
                    <h3>Room name</h3>
                    <p>Last seeen</p>
                
                </div>

                <div className='chat_header_right'>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                
                </div>

            </div>

            <div className='chat_body'>
                <Chatmessage />
                <Chatmessage />
                <Chatmessage />
            </div>

            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value = {input} onChange = {
                        (e) => setInput(e.target.value)} 
                    type="text" placeholder="type a message" />
                    <button type='submit' onClick = {sendMessage}><SendIcon /></button>
                </form>
                <MicIcon />
            </div>
        </div>

    
    )
}

export default Chat
