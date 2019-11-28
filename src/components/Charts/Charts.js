// import React from 'react';
import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import {connect} from 'react-redux';


class Charts extends Component {

    componentDidMount () {
        this.props.dispatch({
            type: 'FETCH_SEVEN_DAYS',
            payload: moment().subtract( 7, "days" ).format('L')
        })
    }

    data = [
        {
            name: 'Page A', uv: 4000, pv: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300,
        },
    ];

    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={this.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Charts);