import React, { Component } from 'react';
    
    
class MyComponent extends Component {
    render() {
        return(
    <>   <h1>{this.props.firstName},{this.props.lastName} </h1>
         <div> Age: {this.props.Age} </div>
         <div> HairColor: {this.props.color} </div>
         <hr/>
         
    </>
    );
}
}
    
export default MyComponent;