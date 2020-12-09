import React from 'react';
import { connect } from 'react-redux';
const Profile: React.FC<{ username: string }> = (props) => {
    return (<div>
        <p>{props.username}</p>
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Profile);