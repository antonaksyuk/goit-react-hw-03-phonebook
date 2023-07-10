import { Component } from 'react';
import { isEqual } from 'lodash';
import style from './/PhoneBookForm/PhoneBookForm.module.css'

import PhoneBookForm from './PhoneBookForm';
import PhoneBookList from './PhoneBookList';
import PhoneBookItem from './PhoneBookItem';
import PhoneBookFilter from './PhoneBookFilter';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };
    
    addContact = contact => { 
        const data = this.state.contacts.some(item => isEqual(item.name, contact.name)) 
        data ? alert(`${contact.name} is already in the contact list`) :
        this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] }
        }) 
    }

    deleteContact = id => {
        this.setState(prevState => { 
            return { contacts: prevState.contacts.filter(item => item.id !== id) }       })
}

    onHandleChange = e => { 
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    filterContacts = () => { 
        const { contacts, filter } = this.state;
        const filteredItems = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        return filteredItems
    }

    render() {
        return (
            <div className={style.container}>
                <h1>Phonebook</h1>
                < PhoneBookForm contact={this.addContact} />
                <h2>Contacts</h2>
                <PhoneBookFilter filter={this.onHandleChange} />
                < PhoneBookList>
                    <PhoneBookItem filter={this.filterContacts} delete={this.deleteContact} />
                </PhoneBookList>
            </div>
        );
    };  
}