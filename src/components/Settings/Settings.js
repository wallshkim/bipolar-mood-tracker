import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationList from '../MedicationList/MedicationList';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';



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
                    <Button color="primary" onClick={this.addMedication}>+</Button>
                </div>
                <div className="MedicationList-ListContainer">
                    <MedicationList />
                </div>
                {/* <div className="Settings-titleBtnContainer">
                    <h2>Wellness Team</h2>
                    <button onClick={this.addContact}>+</button>
                </div> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Settings);
