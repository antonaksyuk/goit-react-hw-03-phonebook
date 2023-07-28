import { nanoid } from 'nanoid';
import { Component } from 'react';
import propTypes from 'prop-types';

import style from './PhoneBookForm.module.css'

export default class PhoneBookForm extends Component {
    state = {
        name: '',
        number: ''
    }
    onFormSubmit = e => {
        e.preventDefault();
        
        const newItem = { name: this.state.name, number: this.state.number, id: nanoid(4) };
        this.props.contact(newItem);
        this.setState({ name: '', number: '' })
      }

    onHandleChange = e => { 
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
      
    render() {
        return (
            <form className={style.inputForm} onSubmit={this.onFormSubmit}>
                <label className={style.input}> Name 
                    <br />
                    <input
                    type="text"
                    name="name"
                   
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.onHandleChange}
                    value={this.state.name}
                />
                </label>
                <label className={style.input}> Number
                    <br />
                    <input
                    type="tel"
                    name="number"
                    
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.onHandleChange}
                    value={this.state.number}
                />
                </label>
                
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

PhoneBookForm.propTypes = {
    contact: propTypes.func.isRequired,
}