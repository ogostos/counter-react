export default class API {
  static getRandomNumber(min, max) {
    const reqBody = {
      jsonrpc: "2.0",
      method: "generateIntegers",
      params: {
        apiKey:"7c5cbbfc-8c69-4e9b-bf12-986720d4e197",
        n: 1,
        min,
        max
      },
      id: 1
    };
    return fetch(`https://api.random.org/json-rpc/1/invoke`,
      {
        method: 'POST',
        body: JSON.stringify(reqBody),

      })
      .then(res => res.json())
      .then(num => num.result.random.data[0])
      .catch(err => console.log(err))
  }
}