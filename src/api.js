const apiCalls = {

  async getItems() {
    const response = await fetch('http://localhost:3001/items');
    const data = await response.json();
    return data;
  },

  async postItem(item) {
    const postObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    const fetchResponse = await fetch('http://localhost:3001/items', postObj)
    const data = await fetchResponse.json();
    return data;
  }
}

export default apiCalls;
