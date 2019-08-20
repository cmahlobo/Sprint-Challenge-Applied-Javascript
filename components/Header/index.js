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

function Header() {
    let hCont = document.createElement('div')
    hCont.classList.add('header')
   
    let hSpan = document.createElement('span')
    hSpan.classList.add('date');
    hSpan.textContent = "MARCH 28, 2019"
   
    let heading = document.createElement('h1')
    heading.textContent = "Lambda Times"
   
    let temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = "98°"


    hCont.appendChild(heading);
    hCont.appendChild(hSpan);
    hCont.appendChild(temp);


    return hCont
}

    document.querySelector('.header-container').appendChild(Header())