import React, { Component } from 'react';
import { connect } from 'react-redux'

export class AddIngredients extends Component {
  render(){
   debugger
    return(
      <div>
  
          <h1>"Heyy"</h1>
     
      </div>
    )
  }
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)

function mapStateToProps(state) {
 return {ingredients: state.ingredients}
}