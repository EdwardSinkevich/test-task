import MRSoft from '../models/MRSoft';
import StartPage from '../views/layouts/startPage';
import DataList from '../views/dataList/dataList';

export default class initController {
  constructor() {
    this.url = 'https://www.mrsoft.by/data.json';
    this.MRSoft = null;
  }

  addListeners() {
    const filterByLengthBtn = document.getElementById('length-filter');
    const filterByLength = this.filterByLength.bind(this);

    const filterByMatchBtn = document.getElementById('match-filter');
    const filterByMatch = this.filterByMatch.bind(this);

    filterByLengthBtn.addEventListener('click', filterByLength);
    filterByMatchBtn.addEventListener('click', filterByMatch);
  }

  getFilterCriteria() {
    const filterCriteriaInput = document.getElementById('filter-criteria');
    return filterCriteriaInput.value;
  }

  showResult(filteredData) {
    const list = DataList.createDataList(filteredData);
    StartPage.appendFilteredData(list);
  }

  async filterByLength() {
    const filterCriteria = this.getFilterCriteria();
    const filteredData = await this.MRSoft.filterByLength(filterCriteria);
    this.showResult(filteredData);
  }

  async filterByMatch() {
    const filterCriteria = this.getFilterCriteria();
    const caseSensitive = document.getElementById('case-sensitive').checked;
    const filteredData = await this.MRSoft.filterByMatch(filterCriteria, caseSensitive);
    this.showResult(filteredData);
  }

  start() {
    this.MRSoft = new MRSoft(this.url);
    StartPage.render();

    this.addListeners();
  }
}