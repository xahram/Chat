import React from 'react';
// import { TextField } from '@material-ui/core';
import classes from './Login.module.css';
import useStyles from './Login.material';
import useOnChange from '../../../hooks/useOnChange'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/authActions'
import { Button, Typography, TextField } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const Login: React.FC<{ logInHandler: any, isAuthenticated: boolean, history: any }> = (props) => {
    // Capturing Values for each field
    const [username, setUsernameHandler] = useOnChange("")
    const [password, setPasswordHandler] = useOnChange("")
    const materialClasses = useStyles();
    const inputprops = {
        className: materialClasses.inputField
    }

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.logInHandler(username.toLowerCase(), password, props.history)
    }

    return (<div className={classes.Login}>
        <form onSubmit={onSubmitHandler} className={classes.LoginForm + " " + materialClasses.root}>
            <TextField value={username} onChange={setUsernameHandler} color="secondary" style={{ margin: 0 }} inputProps={inputprops} id="username" label="Username" />
            <TextField value={password} onChange={setPasswordHandler} color="secondary" inputProps={inputprops} id="password" label="Password" />
            <Button type='submit' variant="contained" color="primary">
                Submit</Button>
            <Typography color='textSecondary' variant="h5">Already have an Account? <NavLink to="/sign-up">Click Here</NavLink> </Typography >
        </form>

    </div>);
}


const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}
const mapActionsToProps = (dispatch: any) => {
    return {
        logInHandler: (username: any, password: any, history: any) => { dispatch(actions.authLogin(username, password, history)) }
    }
}
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login))