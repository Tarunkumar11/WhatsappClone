import React from 'react'
import './Chatmessage.css'

function Chatmessage() {
    return (
        <div className={`message_body ${true && 'chat_receiver'}`}>
            <h2>Mike</h2>
            <p>How are you bro <span className='time_stamp'>3.13pm</span></p>
        </div>
    )
}

export default Chatmessage
