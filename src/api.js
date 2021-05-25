const apiCalls = {

  async getItems() {
    const response = await fetch('http://localhost:3001/item');
    const data = await response.json();
    return data;
  }

  async postItem(url, data) {
    const postObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const fetchResponse = await fetch('http://localhost:3001/item', postObj)
    const data = await fetchReponse.json();
    return data;
}

export default apiCalls;
