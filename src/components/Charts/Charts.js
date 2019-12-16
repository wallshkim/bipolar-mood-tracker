import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';
import { FormControlLabel, Checkbox, Paper, Typography }from '@material-ui/core/';

/* Renders the mood charts for 7 days and 30 days */
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