import React, { useRef, useEffect } from 'react'
import Message from './Message'

function MessagesBox({messages}) {
    const endDiv = useRef(null)
    
    useEffect(() => {
        endDiv.current.scrollIntoView()
    })
    return (
        <div className="chats">
            {messages.map((message) => (
                <Message message={message} key={message.id}></Message>
            ))};
            <div style={{float: "right", clear: 'both'}} ref={endDiv}></div>
        </div>
    );
}

export default MessagesBox
