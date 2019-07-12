// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(header());

function header() {

    // Create elements where necessary
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // Create class lists where necessary
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // Create text content where necessary
    headerDate.textContent = 'March 28, 2019';
    headerTemp.innerHTML = '98&deg';

    // Attach elements where necessary
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    return header;
}
