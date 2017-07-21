import React, { Component } from 'react';
import { AddIngredients } from '../ingredients/AddIngredients'


export class RecipesInput extends Component {
    render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Recipe</label>
            <input 
              type="text" 
              value={this.state.recipe}
              onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }

  handleChange(event) {
      this.setState({
        recipe: event.target.value
      });
    };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RECIPE',
      recipe: this.state.text,
    });
    this.setState({
      text: '',
    });
  }
};

export const ConnectedRecipesInput = (RecipesInput)
