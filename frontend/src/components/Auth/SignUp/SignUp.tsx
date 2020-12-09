import React from 'react';
import { TextField } from '@material-ui/core';
import classes from './SignUp.module.css';
import useStyles from './SignUp.material';
import useOnChange from '../../../hooks/useOnChange'
import { withRouter } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/authActions'


const SignUp: React.FC<{ signUpHandler: any, isAuthenticated: boolean, history: any }> = (props) => {
    // Capturing Values for each field
    const [username, setUsernameHandler] = useOnChange("")
    const [email, setVEmailHandler] = useOnChange("")
    const [password, setPasswordHandler] = useOnChange("")
    const materialClasses = useStyles();
    const inputprops = {
        className: materialClasses.inputField
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.signUpHandler(email, username.toLowerCase(), password, props.history)
     
     

    }

    return (<div className={classes.SignUp}>
        <form onSubmit={onSubmitHandler} className={classes.SignUpForm + " " + materialClasses.root}>
            <TextField value={username} onChange={setUsernameHandler} color="secondary" style={{ margin: 0 }} inputProps={inputprops} id="username" label="Username" />
            <TextField value={email} onChange={setVEmailHandler} color="secondary" inputProps={inputprops} id="email" label="Email" />
            <TextField value={password} onChange={setPasswordHandler} color="secondary" inputProps={inputprops} id="password" label="Password" />
            <Button type='submit' variant="contained" color="primary">
                Submit</Button>
            <Typography color='textSecondary' variant="h5">Already have an Account? <NavLink to="/login" >Click Here</NavLink> </Typography>
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
        signUpHandler: (email: any, username: any, password: any, history:any) => { dispatch(actions.authSignUp(email, username, password,history)) }
    }
}
export default withRouter(connect(mapStateToProps, mapActionsToProps)(SignUp));