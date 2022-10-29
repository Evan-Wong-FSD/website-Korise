export function updateState (store, moduleName, key, value) {
  store.commit(`${moduleName}/updateState`, { key, value })
}