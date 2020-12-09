import React from 'react';
import SignUp from './SignUp/SignUp';
import classes from './Auth.module.css';


const Auth: React.FC = () => {
    return (<div className={classes.Auth}>
        <SignUp />
    </div>)
}
export default Auth;