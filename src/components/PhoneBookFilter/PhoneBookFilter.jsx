import { Component } from 'react';
import propTypes from 'prop-types'

import style from '../PhoneBookForm/PhoneBookForm.module.css'

export default class PhoneBookFilter extends Component {
    render() {
        return (
            <>
                <label className={style.inputForm}> Find contacts by name
                    <br />
                    <input className={style.input} type="text" name='filter' onChange={this.props.filter}/>
                </label>
            </>
 )       
    }
}

PhoneBookFilter.propTypes = {
    filter: propTypes.func.isRequired,
}

