import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import obj from '../components/obj.js';

class User extends React.Component{
    render() {
        const  id = this.props.match.params.id;
        console.log(obj[id], obj.name);
        const user = obj[id];
        const name = user.name;
        return(
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default User;