import { Component } from 'react';
import style from './PhoneBookList.module.css'

export default class PhoneBookList extends Component {
    render() {
        
        return (
            <ul className={style.list}>{ this.props.children }</ul>
        )
    }
}