import React, { useState, useEffect } from 'react'
import { mainUser, contactsMessages, Message } from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessageBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import Search from './components/Search'
import Welcome from './components/Welcome'
import './App.css'

function App() {

    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [filteredContacts, setFilteredContacts] = useState([])

    useEffect(() => {
        const currentContact = data.find((data) => data.contact.id === contactSelected.id)
        setCurrentMessages((currentContact && currentContact.messages) || [])
        filterContacts(data, search)
    }, [contactSelected, data, search])

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

    function handleSearch(input){
        setSearch(input)
        filterContacts(data, input)
    }

    function filterContacts(data, search){
        const result = data.filter(({contact}) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        })

        setFilteredContacts(result)
    }
    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser}></Avatar>
                </header>
                <Search search={search} setSearch={setSearch} handleSearch={handleSearch}></Search>
                <div className="contact-boxes">
                    {filteredContacts.map(({contact, messages}) => (
                        <ContactBox contact={contact} key={contact.id} setContactSelected={setContactSelected} messages={messages}/>
                    ))}
                </div>
            </aside>
            {contactSelected.id ? (
                <main>
                    <header>
                        <Avatar user={contactSelected} showName></Avatar>
                    </header>
                    <MessageBox messages={currentMessages}></MessageBox>
                    <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage}></ChatInputBox>
                </main>
            ) : <Welcome></Welcome>}
            
        </div>
    )
}

export default App
