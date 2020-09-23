import React, { useState } from 'react'

import emojiIcon from './assets/tag_faces.svg'

import micIcon from './assets/mic.svg'

import doubleCheck from './assets/done_all.svg'


import { mainUser, contactsMessages } from './generateFakeData'

import Avatar from './components/Avatar'

import ContactBox from './components/ContactBox'

import './App.css'

function App() {

    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
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
                <div className="chats">
                    <div className="message received">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatibus fuga illo.
                        <div className="metadata">
                            <span className="date">05/20/2020</span>
                        </div>
                    </div>
                    <div className="message sent">
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                        <div className="metadata">
                            <span className="date">05/20/2020</span>
                            <img src={doubleCheck} alt="" className="icon-small" />
                        </div>
                    </div>
                </div>
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
