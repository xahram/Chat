import React from 'react';
import Message from './Message/Message';
import classes from './Messagebox.module.css';

export default class Messagebox extends React.Component {

    render() {
        const messages = this.props.messages.map((message) => {
            return <Message messageText={message.message} username={message.username} />
        })
        return (<div className={classes.MessageBox}>
            {messages}
        </div>
        );
    }
}