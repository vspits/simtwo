import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {updateImageURL} from '../../../ducks/reducer'

class StepTwo extends Component {
    render(){
        const {updateImageURL} = this.props
        return(
            <div>
                <h2>Add New Listing</h2>

                <h3>Image URL</h3>
                <input onChange={(e) => updateImageURL(e.target.value)} type='text' />

                <Link to='/wizard/stepone'><button>Previous Step</button></Link>

                <Link to='/wizard/stepthree'><button>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        image_url: reduxState.image_url
    }
}

const mapDispatchToProps = {
    updateImageURL
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)