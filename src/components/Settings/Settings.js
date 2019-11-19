import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationList from '../MedicationList/MedicationList';


class Settings extends Component {

    addMedication = () => {
        console.log('add medication clicked!');
        // route to AddMedication Component
    }

    addContact = () => {
        console.log('add contact clicked!');
        // route to AddMedication Component
    }

    render() {
        return (
            <div>
                <h1>Settings</h1>
                <div className="Settings-titleBtnContainer">
                    <h2>Medications</h2>
                    <button onClick={this.addMedication}>+</button>
                </div>
                <div className="MedicationList-ListContainer">
                    <MedicationList />
                </div>
                <div className="Settings-titleBtnContainer">
                    <h2>Wellness Team</h2>
                    <button onClick={this.addContact}>+</button>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Settings);
