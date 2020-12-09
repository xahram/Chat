import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from '../Auth/SignUp/SignUp'
import Login from '../Auth/Login/Login'
import { connect } from 'react-redux'
const Layout: React.FC<{ isAuthenticated: boolean }> = (props) => {
    let app = props.isAuthenticated ? (<>
        <header></header>
        <main>
            {props.children}
        </main><footer></footer>
    </>) : (<>
        <Switch>
            <Route path="/sign-up" component={Signup} />
            <Route path="/login" component={Login} />
            <Redirect to="sign-up" />
        </Switch>
    </>)
    return app;
}
const mapStatToProps = (state: any) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}
export default connect(mapStatToProps)(Layout)