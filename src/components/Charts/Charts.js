import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ComposedChart } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class Charts extends Component {

    state = {
        showIrritability: false,
        showAnxiety: false,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_SEVEN_DAYS'
        })

        this.props.dispatch({
            type: 'FETCH_THIRTY_DAYS'
        })
    }

    handleChangeFor = (propertyName) => {
        console.log('checks are changing');
        
        this.setState({
            ...this.state,
            [propertyName]: !this.state.propertyName
        })
    }

    render() {
        return (
            <div>
                
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.showIrritability}
                            onChange={() => this.handleChangeFor('showIrritability')}
                            value={this.state.showIrritability}
                        />
                    }
                    label="Irritability"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.showAnxiety}
                            onChange={() => this.handleChangeFor('showAnxiety')}
                            value={this.state.showAnxiety}
                        />
                    }
                    label="Anxiety"
                />

                <div>
                    <ComposedChart
                        className="Charts-Seven"
                        width={400}
                        height={250}
                        data={this.props.sevenDaysReducer}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} allowDecimals={false} interval={0}/>
                        <YAxis tick={{ fontSize: 12 }} allowDecimals={false} interval={0} width={10}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="elevated" stroke="#eb0c05" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="depressed" stroke="#2600d1" activeDot={{ r: 8 }} />

                        {this.state.showIrritability &&
                            <Line type="monotone" dataKey="irritability" stroke="#82ca9d" activeDot={{ r: 8 }} />}

                        {this.state.showAnxiety &&
                            <Line type="monotone" dataKey="anxiety" stroke="#b65cf2" activeDot={{ r: 8 }} />}

                    </ComposedChart>

                    {/* <AreaChart width={375} height={250} data={this.props.sevenDaysReducer}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorElevated" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#eb0c05" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#eb0c05" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorDepressed" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2600d1" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#2600d1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} padding={{ left: 15, right: 15 }}/>
                        <YAxis tick={{ fontSize: 10 }} allowDecimals={false} interval={0} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="elevated" stroke="#eb0c05" fillOpacity={1} fill="url(#colorElevated)" />
                        <Area type="monotone" dataKey="depressed" stroke="#2600d1" fillOpacity={1} fill="url(#colorDepressed)" />
                    </AreaChart> */}

                    <pre>{JSON.stringify(this.props.sevenDaysReducer, null, 2)}</pre>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                </div>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Charts);