import './style.scss';

export default class Toolbar {

  static render() {
    const toobar = document.createElement('div');
    toobar.classList.add('toolbar');
    toobar.innerHTML = `
      <p>FILTER</p>
      <input type="text" placeholder="Enter a number or string" id="filter-criteria" class="filter-input">
      <div class="wrapper-btns">
       <div class="case-checkbox">
        <input type="checkbox" id="case-sensitive">
        <label for="case-sensitive">Case sensitive</label>
       </div>
        <div class="filter-btns">
          <button id="length-filter" class="btn">By length</button>
          <button id="match-filter" class="btn match-btn">By match</button> 
        </div>
      </div>
    `
    return toobar;
  }
}