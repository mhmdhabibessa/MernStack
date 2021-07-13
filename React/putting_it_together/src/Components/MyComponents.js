import React, { Component } from 'react';
    
    
class MyComponents extends Component {
    constructor(props){
    super(props);
    this.state= {
        age_staudent :this.props.Age
    }
    console.log(this.state.age_staudent);
         
    };

    
    render() {
        return(
    <>   <h1>{this.props.firstName},{this.props.lastName} </h1>
         <div> Age: {this.state.age_staudent} </div>
         <div> HairColor: {this.props.color} </div>
         <button onClick={this.IncraseBithday} > Bithday button for {this.props.firstName} </button>
         <hr/>

         
    </>
    );
}
IncraseBithday = () => {
    if( this.state.age_staudent === this.state.age_staudent ) {
        this.setState({ age_staudent : this.state.age_staudent +1})
        console.log("+++++++++++++++");
        console.log(this.state.age_staudent);

}
} }

    
export default MyComponents;