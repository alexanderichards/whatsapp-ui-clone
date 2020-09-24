import React, { useState, useEffect } from 'react'
import { mainUser, contactsMessages, Message } from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessageBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import './App.css'

function App() {

    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        const currentContact = data.find((data) => data.contact.id === contactSelected.id)
        setCurrentMessages((currentContact && currentContact.messages) || [])
    }, [contactSelected, data])

    function pushMessage(){
        const index = data.findIndex(data => data.contact.id === contactSelected.id)
        const newData = Object.assign([], data, {
            [index] : {
                contact: contactSelected, 
                messages: [...data[index].messages, new Message(true, message, new Date())]
            },
        })
        setData(newData)
        setMessage('')
    }
    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser}></Avatar>
                </header>
                <div className="search">
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
                <div className="contact-boxes">
                    {data.map(({contact}) => (
                    <ContactBox contact={contact} key={contact.id} setContactSelected={setContactSelected}/>
                    ))}
                </div>
            </aside>
            <main>
                <header>
                    <Avatar user={contactSelected} showName></Avatar>
                </header>
                <MessageBox messages={currentMessages}></MessageBox>
                <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage}></ChatInputBox>
            </main>
        </div>
    )
}

export default App
