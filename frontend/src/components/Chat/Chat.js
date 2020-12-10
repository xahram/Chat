import React from 'react';
import Messagebox from './MessageBox/Messagebox';
import classes from './Chat.module.css';
import {connect} from "react-redux"
import useOnChange from '../../hooks/useOnChange'
import socketClient from "socket.io-client"
const SERVER = "http://localhost:8000";


const Chat = (props) => {
    const [state, setstate] = React.useState({
        messages: []
    })
    const [value, setvalue] = useOnChange("")
    const socket = socketClient(SERVER)
    React.useEffect(() => {
        socket.on("connection", (data) => {
            console.log("run",data)
        })
    }, [])


    const onClickHandler = () => {
        socket.emit("new_message", { username: props.username, message: value })
    }

    socket.on("receive_messages", (messages) => {
        console.log(messages)
        setstate({ messages: messages })
    })
    return (<div className={classes.Chat}>
        <Messagebox messages={state.messages} />
        <input onChange={setvalue} value={value} type="text" />‍
        <button onClick={onClickHandler}>Send</button>‍
    </div>
    );

}
const mapStateToProps = (state)=>{
    return {
        username:state.username
    }
}
export default connect(mapStateToProps)(Chat)