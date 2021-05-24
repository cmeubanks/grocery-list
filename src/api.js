const apiCalls = {

  async getItems() {
    const response = await fetch('http://localhost:3001/api/v1/item');
    const data = await response.json();
    return data;
  }

}
