export default {
  getItems: () => {
    const options = {
      method: 'GET',
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
  addItems: (jsonBody) => {
    const options = {
      method: 'POST',
      body: jsonBody,
      headers: { 'content-type': 'application/json' },
    };
    return fetch('/api/items', options)
  }
};
