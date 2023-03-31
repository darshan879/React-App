import React from 'react';

class Item extends React.Component{


  constructor(props){
    super(props)
    
  }

clickMe(){
  console.log("I clicked:",this.props.name)
}


  render(){
    return(
      <h1 onClick={()=> this.clickMe()}>this is {this.props.name}</h1>
    )
  }
}

export default Item;