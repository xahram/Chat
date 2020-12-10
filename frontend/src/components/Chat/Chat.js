import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import Messagebox from './MessageBox/Messagebox';
import classes from './Chat.module.css';

export default class Chat extends React.Component {
    
    render() {
        return (<div className={classes.Chat}>
            <Messagebox />
            <InputGroup>
                <FormControl placeholder="Write Text Here" as="textarea" aria-label="With textarea" />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
        );
    }
}