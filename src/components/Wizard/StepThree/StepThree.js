import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updateMonthlyMortgage, updateDesiredRent} from '../../../ducks/reducer'
import axios from 'axios'

class StepThree extends Component {

    createHouse(){

        const bodyObj = {
            property_name: this.props.property_name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            image_url: this.props.image_url,
            monthly_mortgage: this.props.monthly_mortgage,
            desired_rent: this.props.desired_rent
        }

        axios.post(`/api/house`, bodyObj)
            .then(res => {
                this.props.getHouses()
            })
            this.setState({
                property_name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
    }
    
    render(){
        const {updateMonthlyMortgage, updateDesiredRent} = this.props
        return(
            <div>
                <h2>Add New Listing</h2>

                <h3>Monthly Mortgage Amount</h3>
                <input onChange={(e) => updateMonthlyMortgage(e.target.value)} type='text' />

                <h3>Desired Monthly Rent</h3>
                <input onChange={(e) => updateDesiredRent(e.target.value)} type='text' />

                <Link to='/wizard/steptwo'><button>Previous Step</button></Link>

                <button onClick={() => this.createHouse()}>Complete</button>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        monthly_mortgage: reduxState.monthly_mortgage,
        desired_rent: reduxState.desired_rent
    }
}

const mapDispatchToProps = {
    updateMonthlyMortgage,
    updateDesiredRent
}

export default connect(mapStateToProps, mapDispatchToProps)(StepThree)