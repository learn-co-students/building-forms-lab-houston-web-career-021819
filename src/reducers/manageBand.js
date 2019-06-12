export default function manageBand(state = {bands: []}, action) {
  switch(action.type){
    case 'ADD_BAND':
      console.log(state.bands)
      return {...state, bands:state.bands.concat(action.band)}
  }
  return state
};
 

