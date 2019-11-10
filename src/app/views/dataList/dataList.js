import './style.scss';

export default class DataList {

  static createDataList(dataList) {
    const list = document.createElement('ul');
    list.classList.add('data-list');
    list.innerHTML = dataList.map(item => `<li>${item}</li>`).join('');
    return list;
  }
}