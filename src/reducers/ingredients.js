import uuidV4  from 'uuid/v4';

export default function ingredients(state = [], action){
  console.log(action)
  switch (action.type) {
  case "ADD_RECIPE":
    
  case "ADD_INGREDIENT":    
    const ingredient = Object.assign(action.payload, {id: uuidV4()});
    return { ...ingredient, ...state.ingredients };
  case "REMOVE_INGREDIENT":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}
