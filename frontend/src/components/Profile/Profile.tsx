import React from 'react';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
import Search from '../SearchSuggestions/Search/Search';
import socketClient from "socket.io-client"
import classes from './Profile.module.css';
const SERVER = "http://localhost:8000";

const Profile: React.FC<{ username: string }> = (props) => {
    const socket = socketClient(SERVER)
    socket.on("connection", (data: any) => {
        console.log(data)
    })
    return (<div className={classes.profile}>
        <p>Username : {props.username}</p>
        <Search />
        <Chat />
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Profile);