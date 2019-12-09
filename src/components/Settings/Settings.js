import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationList from '../MedicationList/MedicationList';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import AddCircle from '../../images/addcircle.png';
import AddBlackCircle from '../../images/blackcircleadd.png';
import './Settings.css';


class Settings extends Component {

    addMedication = () => {
        console.log('add medication clicked!');
        // route to AddMedication Component
        this.props.history.push(`/medications/add`)
    }

    addContact = () => {
        console.log('add contact clicked!');
        // route to AddMedication Component
    }

    render() {
        return (
            <div>

                {/* <div className="Settings-titleBtnContainer"> */}
                {/* <div> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th><h4>Medications</h4></th>
                            <th><Button color="primary" onClick={this.addMedication}><img src={AddBlackCircle} alt="add button" /></Button></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <MedicationList />
                    </tbody>
                </table>

                <table className="table resources-table">
                    <thead>
                        <tr>
                            <th><h4>Resources</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://suicidepreventionlifeline.org/">Crisis Hotline</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.dbsalliance.org/">Find a Support Group</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <Button color="primary" onClick={this.addMedication}>+</Button> */}
                {/* </div> */}
                {/* </div> */}
                {/* // <div className="MedicationList-ListContainer">
                    // <MedicationList />
                // </div> */}
                {/* <div className="Settings-titleBtnContainer">
                    <h2>Wellness Team</h2>
                    <button onClick={this.addContact}>+</button>
                </div> */}

                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(Settings));
