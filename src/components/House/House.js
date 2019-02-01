import React from 'react'
import './house.css'

const House = props => {
    return (
        <div className='houseComponent' style={{}}>

            <p>Property Name: {props.property_name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <button onClick={() => props.deleteHouse(`${props.house_id}`)}>Delete</button>

        </div>
    )
}
export default House