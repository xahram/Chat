import React from 'react';
import Message from './Message/Message';
import classes from './Messagebox.module.css';

export default class Messagebox extends React.Component {
    state = {
        messages: []
    }
    render() {
        const messages = this.state.messages.map((message) => {
            return <Message />
        })
        return (<div className={classes.MessageBox}>
            {messages}
        </div>
        );
    }
}