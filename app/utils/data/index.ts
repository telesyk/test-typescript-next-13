async function getData(url: string) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return [data, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}

export default getData
