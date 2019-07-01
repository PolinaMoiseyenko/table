import React from 'react';
import './App.css';
import TablePeople from "./components/TablePeople";
import Salary from "./components/Salary";
import SalaryInfo from "./components/SalaryInfo";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Home/Profile";

class Main extends React.Component {

    state = {
        row:0,
        salary: {
            nominal_wage:120,
            prize:50,
            debt:80
        },
    };

    changeRow = (row )=> {
        this.setState({row});
    };

    changeSalary = (salary) => {
        this.setState({salary})
    };

    render() {
        return (
            <div className="row clearfix">

                <div className="menu clearfix">
                    <nav>
                        <ul className = "menu_links clearfix">
                            <li>
                                <Link to='/home'><h1>Home</h1></Link>
                            </li>
                            <li>
                                <Link to='/'><h1>Main</h1></Link>
                            </li>
                            <li>
                                <Link to='/profile'><h1>Profile</h1></Link>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className="grids clearfix">
                    <div>
                        <TablePeople changeRow={this.changeRow}/>
                    </div>
                    <div>
                        <Salary row = {this.state.row} changeSalary={this.changeSalary}/>
                    </div>
                    <div>
                        <SalaryInfo salary = {this.state.salary}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;
