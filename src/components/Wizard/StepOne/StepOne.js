import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updatePropertyName, updateAddress, updateCity, updateState, updateZip} from '../../../ducks/reducer'

class StepOne extends Component {
    render(){
        const {updatePropertyName, updateAddress, updateCity, updateState, updateZip} = this.props
        return(
            <div>
                <h2>Add New Listing</h2>

                <h3>Property Name</h3>
                <input onChange={(e) => updatePropertyName(e.target.value)} type='text' />

                <h3>Address</h3>
                <input onChange={(e) => updateAddress(e.target.value)} type='text' />

                <h3>City</h3>
                <input onChange={(e) => updateCity(e.target.value)} type='text' />

                <h3>State</h3>
                <input onChange={(e) => updateState(e.target.value)} type='text' />

                <h3>Zip</h3>
                <input onChange={(e) => updateZip(e.target.value)} type='text' />

                <Link to='/wizard/steptwo'><button>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        property_name: reduxState.property_name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
    }
}

const mapDispatchToProps = {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOne)