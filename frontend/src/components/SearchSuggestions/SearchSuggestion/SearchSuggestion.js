import React from 'react'
import { Avatar } from '@material-ui/core'
import classes from './SearchSuggestion.module.css'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
const styles = (theme) => {
    return {
        searchSuggestion: {
            display: 'flex',
            justifyContent: "flex-start",
            height: "90%",
            alignItems:"center"
        },
        userNameStyle : {
            paddingLeft:'20%',
        }
    }
}
const searchSuggestion = (props) => {
    console.log(props.user.username)
    return (<Paper className={props.classes.searchSuggestion}>
        <p>{props.user.username}</p>
    </Paper>)
}

export default withStyles(styles)(searchSuggestion);