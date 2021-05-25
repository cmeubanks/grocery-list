const apiCalls = {

  async getItems() {
    const response = await fetch('http://localhost:3001/items');
    const data = await response.json();
    return data;
  }

}

export default apiCalls;
