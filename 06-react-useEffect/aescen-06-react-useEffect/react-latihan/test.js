const API = ((BASE_URL = 'https://62bd2977bac21839b6fd61be.mockapi.io') => ({
  GETS: () => `${BASE_URL}/todos`,
  GET: (id) => `${BASE_URL}/todos/${id}`,
  POST: () => `${BASE_URL}/todos`,
  PUT: (id) => `${BASE_URL}/todos/${id}`,
  DELETE: (id) => `${BASE_URL}/todos/${id}`,
}))();

console.log(API.GET('1'));
console.log(API.GETS());
console.log(API.POST());
console.log(API.PUT('14'));
console.log(API.DELETE('14'));
