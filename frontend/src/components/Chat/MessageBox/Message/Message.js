import React from 'react'

const Message = (props) => {
    return (<div>
        <span>{props.username}</span>   <p>{props.messageText}</p>
    </div>)
}

export default Message