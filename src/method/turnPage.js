export async function turnPage (push, name, params) {
  await push({ name, params })
}