const wrapper = document.querySelector('#wrapper');

const layout = `
  <h1 id="gameTitle">Number Bonds</h1>
  <h3 id="score">Score:<span id="scoreCounter"> 0</span></h2>
  <p id="equation">
    <span id="firstBond">0</span>+<span id="selectedNumber">?</span>=10
  </p>
  <div id="answers"></div>`;

wrapper.innerHtml = layout;
