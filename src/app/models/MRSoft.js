export default class MRSoft {

  constructor(url) {
    this.url = url;
    this.data = null;
  }

  async filterByLength(length) {
    if (!this.data) {
      await this.getData();
    }
    return this.data.data.filter(item => item.length > length);
  }

  async filterByMatch(string, caseSensitive) {
    if (!this.data) {
      await this.getData();
    }

    if(caseSensitive) {
      return this.data.data.filter(item => item.includes(string));
    }
    return this.data.data.filter(item => item.toUpperCase().includes(string.toUpperCase()));
  }

  async getData() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const responce = await fetch(proxyUrl + this.url);
    this.data = await responce.json();
  }
}