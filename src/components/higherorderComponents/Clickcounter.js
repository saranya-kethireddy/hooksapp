import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

//demo - life b4 higher order components came into picture
 class ClickCounter extends Component {
     

    render() {
       const {countKey,incrementCount} = this.props
        return (
            <div>

                <button onClick = {this.incrementCount}>clicked {countKey} times</button>
            </div>
        )
    }
}

export default UpdatedComponent (ClickCounter)