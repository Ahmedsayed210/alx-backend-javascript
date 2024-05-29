function getResponseFromAPI() {
  return new Promise((accept, reject) => {
    let api = true;
    if (api) {
      accept("good");
    } else {
      reject("Not-good");
    }
  });
}
