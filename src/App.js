import React, { useState, useEffect } from 'react'

import emojiIcon from './assets/tag_faces.svg'

import micIcon from './assets/mic.svg'

import { mainUser, contactsMessages } from './generateFakeData'

import Avatar from './components/Avatar'

import ContactBox from './components/ContactBox'

import MessageBox from './components/MessagesBox'

import './App.css'

function App() {

    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])

    useEffect(() => {
        const currentContact = data.find((data) => data.contact.id === contactSelected.id)
        setCurrentMessages((currentContact && currentContact.messages) || [])
    }, [contactSelected, data])
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
                <div className="chat-input-box">
                    <div className="icon emoji-selector">
                        <img src={emojiIcon} alt="" />
                    </div>

                    <div className="chat-input">
                        <input type="text" placeholder="Type a message" />
                    </div>

                    <div className="icon send">
                        <img src={micIcon} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
