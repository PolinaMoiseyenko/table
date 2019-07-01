import * as React from "react";
import './main.css';
import arr from './arr.js'

class TableRow1 extends React.Component {

    constructor(props) {
        super(props);
            this.defaultColor = 'yellow'
            this.activeColor = 'green'
    }


    handleClick = (data, id) => {
        console.log("id:",  data)
        this.props.changeSalary(data.salary);
        const row = id;
        this.props.setActive(row);
    }


    render() {
        const {data, active, id} = this.props;


        return (
            <tr onClick = {() => this.handleClick(data, id)} style={{ backgroundColor: active === id ? this.activeColor : this.defaultColor}}>
                <td key={data.year}>{data.year}</td>
                <td key={data.month}>{data.month}</td>
                <td key={data.cash}>{data.cash}</td>
            </tr>
        );

    }
}


class Salary extends React.Component {

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
        const row = this.props.row;
        const data = arr[row];
        const {active} = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <th>Год</th>
                    <th>Месяц</th>
                    <th>Зарплата на руки</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map((item, index) => (
                        <TableRow1
                            key = {index}
                            id={index}
                            data={item}
                            changeSalary = {this.props.changeSalary}
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
export default Salary;

