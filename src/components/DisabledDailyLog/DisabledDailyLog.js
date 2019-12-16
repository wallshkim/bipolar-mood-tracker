import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, FormControl, Radio, RadioGroup, FormControlLabel, Slider, MenuItem, Select  } from '@material-ui/core/';
import '../DailyLog/DailyLog.css';

/* Allows users to view previous days entries but not edit them */
class DisabledDailyLog extends Component {
    render() {
        const sliderValues = [
            {
                value: 0,
                label: 'Stable',
            },
            {
                value: 1,
                label: 'Mild',
            },
            {
                value: 2,
                label: 'Moderate',
            },
            {
                value: 3,
                label: 'Severe',
            },
        ]

        return (
            <div className="disabled-log-container">

                <div className="dailyInput hours-slept input-grey-background">
                    <p className="inputLabel margin-right">Hours Slept Last Night: </p>
                    <TextField
                        style={{ maxWidth: '50px', minWidth: '50px' }}
                        id="sleep"
                        value={this.props.dailyLogsReducer.sleep}
                        disabled
                        type="number"
                        margin="normal"
                        variant='standard'
                    />
                </div>

                <div className="dailyInput">
                    {/* <Typography className="inputLabel" id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme Elevated mood
                    </Typography> */}
                    <p className="inputLabel">Today's most extreme Elevated mood: </p>
                    <div className="sliderContainer">
                        <Slider
                            value={this.props.dailyLogsReducer.elevated}
                            disabled
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={sliderValues}
                        />
                    </div>
                </div>

                <div className="dailyInput input-grey-background">
                    <p className="inputLabel">Today's most extreme Depressed mood: </p>
                    <div className="sliderContainer">
                        <Slider
                            value={this.props.dailyLogsReducer.depressed}
                            disabled
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={sliderValues}
                        />
                    </div>
                </div>

                <div className="dailyInput">
                    <p className="inputLabel">Today's most extreme irritability: </p>
                    <div className="sliderContainer">
                        <Slider
                            disabled
                            value={this.props.dailyLogsReducer.irritability}
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={sliderValues}
                        />
                    </div>
                </div>

                <div className="dailyInput input-grey-background">
                    <p className="inputLabel">Today's most extreme anxiety: </p>
                    <div className="sliderContainer">
                        <Slider
                            disabled
                            value={this.props.dailyLogsReducer.anxiety}
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={sliderValues}
                        />
                    </div>
                </div>
                <div className="dailyInput psychotic-container">
                    <p className="inputLabel margin-right">Psychotic Symptoms: </p>
                    <FormControl required>
                        <Select
                            style={{ maxWidth: '100px', minWidth: '100px' }}
                            labelId="psychotic"
                            id="psychotic"
                            disabled
                            value={this.props.dailyLogsReducer.psychotic_symptoms}
                            autoWidth
                        >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value='true'>True</MenuItem>
                            <MenuItem value='false'>False</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="dailyInput therapy-container input-grey-background">
                    <p className="inputLabel margin-right">Therapy: </p>
                    <FormControl required>
                        <Select
                            style={{ maxWidth: '100px', minWidth: '100px' }}
                            labelId="therapy"
                            id="therapy"
                            value={this.props.dailyLogsReducer.therapy}
                            disabled
                            autoWidth
                        >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value='true'>True</MenuItem>
                            <MenuItem value='false'>False</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="dailyInput padding-left">
                    <TextField
                        id="standard-helperText"
                        label="Notes"
                        style={{ maxWidth: '350px', minWidth: '350px' }}
                        value={this.props.dailyLogsReducer.notes}
                        type="text"
                        rows="4"
                        margin="normal"
                        multiline={true}
                        disabled
                    />
                </div>

                {this.props.medicationsReducer.map((medication) => {
                    return (
                        console.log('in medicationReducer map, medication is: ', medication.taken),

                        <div className="input-grey-background dailyInput padding-left" key={medication.id}>
                            <p>{medication.name} {medication.dosage}{medication.units} ({medication.time})</p>
                            <FormControl component="fieldset">
                                <RadioGroup className="radioGroup-container" value={String(medication.taken)} aria-label="taken" name="taken">
                                    <FormControlLabel name="taken" value="true" control={
                                        <Radio 
                                            disabled
                                            style={{
                                                color: "black",
                                            }} />
                                    } label="Yes" />
                                    <FormControlLabel name="taken" value="false" control={
                                        <Radio
                                            disabled
                                            style={{
                                                color: "black",
                                            }} />
                                    } label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    )
                })}

                {/* <pre>{JSON.stringify(this.props.medicationsReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.dailyLogsReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(DisabledDailyLog);