import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types'

import style from './PhoneBookListItem.module.css'

export default class PhoneBookItem extends Component {
    render() {
        const {filter} = this.props;
        return (
            <>
                {filter().map(contact => (
                    <li className={style.item} key={nanoid()}>{contact.name}: {contact.number}
                        <button className={style.button} type='button' onClick={() => this.props.delete(contact.id)}>Delete Contact</button>
                        </li>
                ))}
            </>
        );
    }
}
    
PhoneBookItem.propTypes = {
    filter: propTypes.func.isRequired,
    delete: propTypes.func.isRequired,
}