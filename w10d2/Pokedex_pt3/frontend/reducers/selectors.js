

export const selectAllPokemon = state => Object.values(state.entities.pokemon);


// const example = state => ({
//   // object is being implicitly returned
//   // whatever is being evaluated between the ({})
//   // if it's a callback func, then it would return the callback, but not calling it
//   // can only put in one execution in an implicit return
// })

// const example = state => (
//   // also an implicit return but not necessarily an object. It could be a string or something. 
//   "return this"
//  if you want to return another function, it would look like this:
//   () => {}
//   Object.values(state.entities.pokemon)
// )

// const example = state => {
//   return {}
//   Object.values(state.entities.pokemon)
//   // here we have to use return keyword to actually return the object
// }