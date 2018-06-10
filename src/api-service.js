export default {
  getItems: () => {
    const options = {
      method: 'GET',
    };
    return fetch('/api/items', options)
      .then(response => response.json());
  },
  createItems: (jsonBody) => {
    const options = {
      method: 'POST',
      body: jsonBody,
      headers: { 'content-type': 'application/json' },
    };
    return fetch('/api/items', options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error in POST /api/items");
        }
        return response.json();
      })
  },
};
