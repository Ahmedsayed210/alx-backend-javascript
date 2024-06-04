function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'sucsess'
    }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));

}
export default handleResponseFromAPI;