import React from 'react';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
import Search from '../SearchSuggestions/Search/Search';
import classes from './Profile.module.css';
import { NavLink } from 'react-router-dom'

const Profile: React.FC<{ username: string }> = (props) => {
  
    return (<div className={classes.profile}>
        <p>Username : {props.username}</p>
        <NavLink to="chat">Chat</NavLink>
        <Search />
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Profile);