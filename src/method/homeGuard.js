export async function homeGuard (route, push) {
  const { path, params } = route
  if (path !== `/${params.language}`) {
    await push({ name: 'Home', params: { language: params.language } })
  }
}