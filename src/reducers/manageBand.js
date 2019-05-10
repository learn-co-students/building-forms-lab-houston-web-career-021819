export default function manageBand(currentState = {
  bands: [],
}, action) {
  switch(action.type) {
    case 'ADD_BAND' :
      return {
        bands: [...currentState.bands, action.payload]
      }
  }
  return currentState
};
