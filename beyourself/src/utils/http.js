export default {
  get: ({url}) => {
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result
      })
  }
  // post: (url, ...params) => {
  //   return fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(...params)
  //   })
  //     .then(response => response.json())
  //     .then(result => result)
  // }
}