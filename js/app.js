// Define Global Variables
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
// End Global Variables

// function for creating navbar elements by looping of sections on the page
function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}"data-nav="${sec.id}"class="menu__link">${sec.dataset.nav}</a>`;
        navList.appendChild(listItem);
    }
}
// calling the function for create the navbar list 
createListItem();

//styling for the active section with getBoundingClientRect by adding class 'your-active-class' 
//Styling for the active navbar element by adding class 'active-li'
window,
(onscroll = function () {
    this.document.querySelectorAll("section").forEach(function (active) {
        let activeLink=document.querySelector(`[data-nav=${active.id}]`);
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
            activeLink.classList.add('active-li');

        } else {
            active.classList.remove("your-active-class");
            activeLink.classList.remove('active-li');

        }
    });
});

//when clicking an item from the navigation menu, the link should scroll to the appropriate section

navList.addEventListener("click", (toSec) => {

    toSec.preventDefault();
    if (toSec.target.dataset.nav) {

        document
            .getElementById(`${toSec.target.dataset.nav}`)
            .scrollIntoView({
                behavior: "smooth"
            });
        setTimeout(() => {
            location.hash = `$(toSec.target.dataset.nav)`;
        }, 170);
    }
});
// event for click on word navbar to hide or show navbar list
const click = document.querySelector('header p');
click.addEventListener("click",()=>{
    if(document.querySelector('.navbar__menu').style.display==='block')
    document.querySelector('.navbar__menu').style.display='none';
    else
    document.querySelector('.navbar__menu').style.display='block';


})