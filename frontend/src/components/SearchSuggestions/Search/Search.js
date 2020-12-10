
import React from 'react'
import SearchSuggestions from '../SearchSuggestions'
import useOnChange from '../../../hooks/useOnChange'
import useTogglerState from '../../../hooks/useToggleHook'
import classes from './Search.module.css'
import axios from 'axios';
import { InputBase } from '@material-ui/core'
const Search = (props) => {
    const [value, setValue, reset] = useOnChange("")
    const [loading, setLoading] = useTogglerState(false)
    const [users, setUser] = React.useState([])

    React.useEffect(() => {
        if (value.length >= 3) {
            setLoading(true)
            axios.get(`http://localhost:8000/api/v1/searchUser/${value}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
                .then((res) => {

                    setUser(res.data)
                    setLoading(false)
                    console.log(res.data)
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err)
                })
            console.log('request sent')
        } else {
            setUser([])
        }
    }, [value])
    return (<>
        <div className={classes.search}>
            <InputBase value={value} onChange={setValue} placeholder='Search...' />
            <SearchSuggestions reset={reset} loading={loading} users={users} />
        </div>
    </>)
}

export default Search