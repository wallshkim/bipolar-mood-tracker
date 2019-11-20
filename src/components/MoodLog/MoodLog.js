import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


class MoodLog extends Component {

    componentDidMount() {
        this.fetchMedications();
    }

    fetchMedications = () => {
        let userId = this.props.user.id
        console.log('In MedicationList, userId is: ', userId);
        // Fetch medications for this user
        this.props.dispatch({ type: 'FETCH_MEDICATIONS', payload: userId })
    }

    state = {
        sleep: '',
        elevated: '',
        depressed: '',
        irritability: '',
        anxiety: '',
        psychotic: '',
        therapy: '',
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }


    render() {

        let weekday = moment().format('dddd');
        console.log(weekday);
        let todaysDate = moment().format('MMMM Do, YYYY');
        console.log(todaysDate);
        let yesterday = moment().add(-1, 'days')
        console.log(yesterday);

        return (
            <div>
                <h3>{weekday}</h3>
                <h6>{todaysDate}</h6>

                <div className="MoodLog-InputContainer">
                    <p>Hours Slept Last Night: </p>
                    <input placeholder="hours"
                        type="number"
                        value={this.state.sleep}
                        onChange={(event) => this.handleChangeFor('sleep', event)}
                    />
                </div>
                <div className="MoodLog-InputContainer">
                    <p>Today's most extreme elevated mood: </p>
                    <input placeholder="score"
                        type="number"
                        value={this.state.elevated}
                        onChange={(event) => this.handleChangeFor('elevated', event)}
                    />
                </div>
                <div className="MoodLog-InputContainer">
                    <p>Today's most extreme depressed mood: </p>
                    <input placeholder="score"
                        type="number"
                        value={this.state.depressed}
                        onChange={(event) => this.handleChangeFor('depressed', event)}
                    />
                </div>
                <div className="MoodLog-InputContainer">
                    <p>Today's most extreme irritability: </p>
                    <input placeholder="score"
                        type="number"
                        value={this.state.irritability}
                        onChange={(event) => this.handleChangeFor('irritability', event)}
                    />
                </div>
                <div className="MoodLog-InputContainer">
                    <p>Today's most extreme anxiety: </p>
                    <input placeholder="score"
                        type="number"
                        value={this.state.anxiety}
                        onChange={(event) => this.handleChangeFor('anxiety', event)}
                    />
                </div>

                {this.props.medicationsReducer.map((medication) => {
                    return (
                        <div className="MoodLog-InputContainer">
                            <p>{medication.name}: </p>
                            <select>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    )
                })}

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MoodLog);
