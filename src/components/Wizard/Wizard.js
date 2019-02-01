import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleChange(field, value){
        this.setState({[`${field}`]: value})
    }

    render(){
        return(
            <div>
                Wizard
                <Link to='/'><button>Cancel</button></Link>

                <h3>Property Name</h3>
                <input value={this.state.property_name} onChange={(e) => this.handleChange('property_name', e.target.value)} type='text' />

                <h3>Address</h3>
                <input value={this.state.address} onChange={(e) => this.handleChange('address', e.target.value)} type='text' />

                <h3>City</h3>
                <input value={this.state.city} onChange={(e) => this.handleChange('city', e.target.value)} type='text' />

                <h3>State</h3>
                <input value={this.state.state} onChange={(e) => this.handleChange('state', e.target.value)} type='text' />

                <h3>Zip</h3>
                <input value={this.state.zip} onChange={(e) => this.handleChange('zip', e.target.value)} type='text' />

            </div>
        )
    }
}

export default Wizard