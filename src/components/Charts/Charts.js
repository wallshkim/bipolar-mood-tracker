import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ComposedChart } from 'recharts';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
        console.log('checks are changing', this.state.propertyName);
        if(propertyName === 'showIrritability'){
            this.setState({
                ...this.state,
                showIrritability: !this.state.showIrritability
            })
        }
        else if (propertyName === 'showAnxiety'){
            this.setState({
                ...this.state,
                showAnxiety: !this.state.showAnxiety
            })
        }
    }

    render() {
        return (
            <div className="Charts-Container">
                <div className="checkbox-container">
                    <Paper style={{
                        padding: "20px",
                        margin: "10px"
                    }}>
                        <Typography className="checkbox-title">
                            Add additional tracking points:
                        </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.showIrritability}
                                onChange={() => this.handleChangeFor('showIrritability')}
                                value={this.state.showIrritability}
                                style={{
                                    color: "black",
                                }}
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
                                style={{
                                    color: "black",
                                }}
                            />
                        }
                        label="Anxiety"
                    />
                    </Paper>
                </div>

                <div>
                    <Paper style={{ margin: "10px", padding: "5px",}}>
                        <h5>Last 7 Days:</h5>

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
                        <XAxis  dataKey="date_display" tick={{ fontSize: 12 }} allowDecimals={false} interval={0}/>
                        <YAxis tick={{ fontSize: 12 }} allowDecimals={false} interval={0} width={10}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="elevated" strokeWidth={1.5} stroke="#eb0c05" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="depressed" strokeWidth={1.5} stroke="#2600d1" activeDot={{ r: 8 }} />
                        {/* <Area type="monotone" dataKey="depressed" fill="#8884d8" stroke="#8884d8" />
                        <Area type="monotone" dataKey="elevated" fill="#de8e8e" stroke="#de8e8e" /> */}

                        {this.state.showIrritability &&
                                <Line type="monotone" dataKey="irritability" strokeWidth={1.5} stroke="#e8940c" activeDot={{ r: 8 }} />}

                        {this.state.showAnxiety &&
                                <Line type="monotone" dataKey="anxiety" strokeWidth={1.5} stroke="#02bf64" activeDot={{ r: 8 }} />}

                    </ComposedChart>
                    </Paper>
                </div>

                <div>
                    <Paper style={{ margin: "10px", padding: "5px", }}>
                    <h5>Last 30 Days:</h5>
                    <ComposedChart
                        className="Charts-Thirty"
                        width={400}
                        height={250}
                        data={this.props.thirtyDaysReducer}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="date_display" tick={{ fontSize: 12 }} allowDecimals={false} interval={6} />
                        <YAxis tick={{ fontSize: 12 }} allowDecimals={false} interval={0} width={10} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="elevated" strokeWidth={1.5} stroke="#eb0c05" activeDot={{ r: 8 }} dot={false}/>
                        <Line type="monotone" dataKey="depressed" stroke="#2600d1" strokeWidth={1.5} activeDot={{ r: 8 }} dot={false}/>
                        {/* <Area type="monotone" dataKey="depressed" fill="#8884d8" stroke="#8884d8" />
                        <Area type="monotone" dataKey="elevated" fill="#de8e8e" stroke="#de8e8e" /> */}
                        {this.state.showIrritability &&
                                <Line type="monotone" dataKey="irritability" stroke="#e8940c" strokeWidth={1.5} activeDot={{ r: 8 }} dot={false} />}

                        {this.state.showAnxiety &&
                                <Line type="monotone" dataKey="anxiety" stroke="#02bf64" strokeWidth={1.5} activeDot={{ r: 8 }} dot={false} />}

                    </ComposedChart>
                    </Paper>
                </div>
                
                {/* <pre>{JSON.stringify(this.props.sevenDaysReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Charts);