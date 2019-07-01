import React from 'react';
import '../App.css';
import './style.css';

import avatar from './png/avatar.jpg';

import {Link} from "react-router-dom";
import obj from '../components/obj.js';


class Profile extends React.Component{

    state = {
        name: 'Пётр',
        email: 'petr@mail.ru',
        phone: '51885855',
    };

    render() {

        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;

        return(

            <div className="container clearfix">

                <div className="header">
                    <h1>PROFILE</h1>
                </div>

                <img src={avatar} alt="avatar"/>

                <div className="form">
                    <form action="">
                        <input type="text" value={name} name="name" id="name" placeholder=" Имя Фамилия Отчество "/>

                        <br/>

                        <input type="text" value={email} name="email" id="email" placeholder=" e-mail "/>

                        <br/>

                        <input type="text" value={phone} name="phone" id="phone" placeholder=" Phone "/>
                    </form>

                    <button id = "reload">Обновить</button>
                </div>
            </div>


        );
    }
}

export default Profile;