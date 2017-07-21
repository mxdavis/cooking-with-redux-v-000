import { combineReducers } from 'redux'
import recipeForm from "./recipeForm";
import ingredients from "./ingredients";
import recipes from "./recipes";

export const rootReducer = combineReducers({ingredients, recipeForm, recipes})
