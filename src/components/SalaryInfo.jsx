import * as React from "react";
import './main.css';


class TableRow2 extends React.Component {


    render() {
        //const { data } = this.props;
        const { data, id } = this.props;


        return (
            <tr>
                <td key={data.nominal_wage}>{data.nominal_wage}</td>
                <td key={data.prize}>{data.prize}</td>
                <td key={data.debt}>{data.debt}</td>
            </tr>
        );

    }
}

class SalaryInfo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        //const row = this.props.row || 0;

        //console.log('row', row);
        //const data = this.props.data[row];\

        const row = 0;
        const data = this.props.salary;
        return (
            <table>
                <thead>
                <tr>
                    <th>Номинальная зарплата</th>
                    <th>Премия</th>
                    <th>Выплата по долгу</th>
                </tr>
                </thead>
                <tbody>
                        <TableRow2 data={data} />
                </tbody>
            </table>
        );
    }
}

export default SalaryInfo;
