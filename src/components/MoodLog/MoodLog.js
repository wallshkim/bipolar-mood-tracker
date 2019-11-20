import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// let weekday = moment().format('dddd');
// console.log(weekday);
// let todaysDate = moment().format('MMMM Do, YYYY');
// console.log(todaysDate);
// let yesterday = moment().add(-1, 'days')
// console.log(yesterday);

let rawCurrentDate = moment();

class MoodLog extends Component {

    

    state = {
        date: rawCurrentDate.format('L'),
        elevated: '',
        depressed: '',
        sleep: '',
        irritability: '',
        anxiety: '',
        psychoticSymptoms: '',
        therapy: '',
        notes: '',
    }

    handleSubmit = () => {

        console.log('in handleSubmit this.state is: ', this.state);
        // Require all fields except for Notes
        if (this.state.sleep && this.state.elevated && this.state.depressed && this.state.irritability && this.state.anxiety && this.state.psychoticSymptoms && this.state.therapy) {
            // Call addMoods saga
            this.props.dispatch({
                type: 'ADD_MOODS',
                payload: this.state
            })
        }
        // Alert user they need to enter required fields
        else {
            alert('Please enter all fields to move forward');
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }

    render() {

        return (
            <div className="moodContainer">
                <h3>{rawCurrentDate.format('MMMM Do, YYYY')}</h3>

                <div>
                    <p>Hours Slept Last Night: </p>
                    <TextField
                        id="standard-helperText"
                        label="Hours"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.sleep}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('sleep', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme elevated mood: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.elevated}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('elevated', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme depressed mood: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.depressed}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('depressed', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme irritability: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.irritability}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('irritability', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme anxiety: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.anxiety}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('anxiety', event)}
                    />
                </div>
                <div>
                    <p>Psychotic Symptoms: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        defaultValue={this.state.psychoticSymptoms}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('psychoticSymptoms', event)}
                    />
                </div>
                <div>
                    <p>Therapy: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        defaultValue={this.state.therapy}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('therapy', event)}
                    />
                </div>
                <div>
                    <p>Notes: </p>
                    <TextField
                        id="standard-helperText"
                        label="Notes"
                        defaultValue={this.state.notes}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        multiline={true}
                        onChange={(event) => this.handleChangeFor('notes', event)}
                    />
                </div>

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>


                <pre>{JSON.stringify(this.props, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>

            // {/* {this.props.moodReducer.medication_array.map((medication) => {
            //     return (
            //         <div className="MoodLog-InputContainer">
            //             <p>{medication}: </p>
            //             <select>
            //                 <option value="yes">Yes</option>
            //                 <option value="no">No</option>
            //             </select>
            //         </div>
            //     )
            // })} */}
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MoodLog);
