import * as React from "react";
import './main.css';
import obj from './obj.js';
import {Link} from "react-router-dom";


class TableRow extends React.Component {

    constructor(props) {
        super(props);
            this.defaultColor = 'yellow'
            this.activeColor = 'red'
    }

    handleClick = (id) => {
        console.log("id:",id);
        const row = id;
        this.props.changeRow(row);
        this.props.setActive(row);
    }

    render() {
        const { data, id, active } = this.props;
        //const data = this.props.data
        //const id = this.props.id
        return (
            <tr onClick = {() => this.handleClick(id)} style={{ backgroundColor: active === id ? this.activeColor : this.defaultColor}}>
                <td key={data.surname}>{data.surname}</td>
                <td key={data.name}>{data.name}</td>
                <td key={data.patronymic}>{data.patronymic}</td>
                <td><Link to={`/user/${id}`}><button>Подробнее</button></Link></td>
            </tr>
        );
    }
}


class TablePeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }
    }

    setActive = (active) => {
        this.setState({active});
    }

    render() {


        const data = obj;
        const {active} = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Подробнее</th>
                </tr>
                </thead>
                <tbody>
                {

                    data && data.map((item, index) => (
                        <TableRow
                            key = {index}
                            id={index}
                            data={item}
                            changeRow = {this.props.changeRow}
                            setActive={this.setActive}
                            active={active}
                        />
                    ))

                }
                </tbody>

            </table>

        );
    }
}


export default TablePeople;
