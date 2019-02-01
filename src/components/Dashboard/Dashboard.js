import React, { Component } from 'react'
import House from '../House/House';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            listOfHouses: []
        }
        this.getHouses = this.getHouses.bind(this)
    }

    componentDidMount(){
        this.getHouses()
    }

// // // GET HOUSE FUNCTION // // //

    getHouses(){
        axios.get(`/api/houses`)
        .then(res => {
            console.log(res.data)
            this.setState({listOfHouses: res.data})
        })
    }


// // // DELETE HOUSE FUNCTION // // //

    deleteHouse(house_id){
        axios.delete(`/api/house/${house_id}`)
        .then((res) => {
            this.getHouses()
            this.setState({listOfHouses: res.data})
        })
    }

    render(){

// // // MAPPING OVER HOUSES TO DISPLAY EACH IN DASHBOARD // // //

        let mappedHouses = this.state.listOfHouses.map(house => {
            return ( 
                <House 
                    key={house.house_id}
                    property_name={house.property_name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                    deleteHouse={this.deleteHouse}
                /> 
            )
        })


        return(
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}

export default Dashboard