import Toolbar from '../toolbar/toolbar';

import './style.scss';

export default class StartPage {

  static appendFilteredData(list) {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = `<p>RESULT:</p> ${list.outerHTML}`;
  }

  static render() {
    const toolbar = Toolbar.render();

    const mainContent = document.getElementById('main');
    mainContent.innerHTML = `
        <section class="container">
          ${toolbar.outerHTML}
        </section>
        <section class="container">
          <div id="data-list" class="data-list-wrapper"></div>
        </section>
      `;
  }
}