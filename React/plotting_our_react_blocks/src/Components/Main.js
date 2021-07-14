import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <div className="mainlast">
               
                 <div class="all">
                 { this.props.children }

                 </div>
                 
            </div>
            
        )
    }
}

export default Main
