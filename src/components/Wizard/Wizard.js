import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
    constructor(props){
        super(props)
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

    createHouse(){

        const bodyObj = {
            property_name: this.state.property_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
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

                <button onClick={() => this.createHouse()}>Complete</button>

            </div>
        )
    }
}

export default Wizard