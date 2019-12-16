import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MedicationList from '../MedicationList/MedicationList';
import Button from '@material-ui/core/Button';
import AddBlackCircle from '../../images/blackcircleadd.png';
import './Settings.css';

/* Renders resources and current medications */
class Settings extends Component {

    addMedication = () => {
        console.log('add medication clicked!');
        // route to AddMedication Component
        this.props.history.push(`/medications/add`)
    }

    render() {
        return (
            <div>
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
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(Settings));
