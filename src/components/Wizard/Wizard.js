import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import StepOne from './StepOne/StepOne'
import StepTwo from './StepTwo/StepTwo'
import StepThree from './StepThree/StepThree'


class Wizard extends Component {
    render(){
        return(
            <div className='wizard'>
                Wizard
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/stepone' component={StepOne}/>
                <Route path='/wizard/steptwo' component={StepTwo}/>
                <Route path='/wizard/stepthree' component={StepThree}/>
            </div>
        )
    }
}

export default Wizard