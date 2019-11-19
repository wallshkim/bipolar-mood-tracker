import React, { Component } from 'react';
import { connect } from 'react-redux';

class MedicationList extends Component {

    componentDidMount() {
        // Dispatched action to fetchMedications saga
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    render() {
        return (
            <div>
                <ul>


                </ul>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MedicationList);