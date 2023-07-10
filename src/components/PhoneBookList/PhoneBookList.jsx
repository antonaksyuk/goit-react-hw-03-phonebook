import { Component } from 'react';
import propType from 'prop-types'

import style from './PhoneBookList.module.css'

export default class PhoneBookList extends Component {
    render() {
        
        return (
            <ul className={style.list}>{ this.props.children }</ul>
        )
    }
}

PhoneBookList.propType = {
    children: propType.node,
}