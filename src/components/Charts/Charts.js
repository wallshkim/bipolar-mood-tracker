import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Charts extends Component {

    state = {
        showIrritability: true,
        showAnxiety: true,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_SEVEN_DAYS'
        })
    }

    render() {
        return (
            <div>
                <div className="Charts-Container">
                    <LineChart
                        className="Charts-Seven"
                        width={350}
                        height={250}
                        data={this.props.sevenDaysReducer}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="elevated" stroke="#eb0c05" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="depressed" stroke="#2600d1" activeDot={{ r: 8 }} />

                        {this.state.showIrritability &&
                         <Line type="monotone" dataKey="irritability" stroke="#82ca9d" activeDot={{ r: 8 }} /> }

                        {this.state.showAnxiety &&
                            <Line type="monotone" dataKey="anxiety" stroke="#b65cf2" activeDot={{ r: 8 }} />}

                    </LineChart>
                    <pre>{JSON.stringify(this.props.sevenDaysReducer, null, 2)}</pre>
                </div>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Charts);