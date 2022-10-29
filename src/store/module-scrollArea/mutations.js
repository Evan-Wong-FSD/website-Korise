// export function functionName (state, payload) {
//   // something here
// }

export function renewScrollAreaRef (state, payload) {
  state.scrollAreaRef = payload
}

export function setElementOffsetTop (state, payload) {
  state.elementOffsetTop[payload.name] = payload.offsetTop
}


// export { renewScrollAreaRef }
