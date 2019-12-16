import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationItem from '../MedicationItem/MedicationItem';

/* Maps over medications and passes props to MedicationItem component */
class MedicationList extends Component {
    componentDidMount() {
        this.fetchMedications();
    }

    fetchMedications = () => {
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    render() {
        return (
            <>
                {this.props.medicationsReducer.map((medication) => {
                    return (
                        <MedicationItem key={medication.id} medication={medication} />
                    )
                })}
                {/* <pre>{JSON.stringify(this.props.medicationsReducer, null, 2)}</pre> */}
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MedicationList);