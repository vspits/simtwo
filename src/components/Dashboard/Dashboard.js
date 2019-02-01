import React, { Component } from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            listOfHouses: []
        }
    }
    render(){
        let mappedHouses = this.state.listOfHouses.map(house => {
            return <House />
        })

        return(
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                <House />
            </div>
        )
    }
}

export default Dashboard