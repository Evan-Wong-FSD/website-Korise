export function updateState (state, payload) {
  const { key, value } = payload
  state[key] = value
}
