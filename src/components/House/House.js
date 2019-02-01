import React from 'react'

const House = props => {
    return (
        <div style={{border: '1px solid black', height: '250px', width: '400px'}}>

            <p>Property Name: {props.property_name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <button>Delete</button>
        </div>
    )
}
export default House