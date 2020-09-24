import React from 'react'
import Message from './Message'

function MessagesBox({messages}) {
    return (
        <div className="chats">
            {messages.map((message) => (
                <Message message={message} key={message.id}></Message>
            ))};
        </div>
    );
}

export default MessagesBox
