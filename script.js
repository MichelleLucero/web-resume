(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  // places the distance from the top of the page for each section in an array
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
    console.log(sections[e.id]);
  });
  console.log(sections);
  window.onscroll = function() {
    var scrollPosition = document.body.scrollTop;  // current scroll position
    for (i in sections) {
      // if a section's position is less than or equal to the current position (8 is a buffer)...
      console.log("sections[i]: " + sections[i]);
      console.log("scrollPosition" + scrollPosition);

      if ((sections[i] - 8) <= scrollPosition) {
        // ... then add the class to the matching menu item.
        document.querySelector('.highlight').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'highlight');
      }
    }
  };
})();


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const menu = document.getElementsByClassName('menu')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function toggle_menu(){
  navbarLinks.classList.toggle('active')
}

document.getElementById("toggleMenu").onclick=function(){
  toggle_menu();
}
//close navbar outside click
function findActive(){
  var isActive = navbarLinks.classList.contains('active');
  if(isActive == true){
    toggle_menu();
  }
}

window.addEventListener('click', function(event){
 var isInside = navbarLinks.contains(event.target);
 var isMenu = menu.contains(event.target);

 // if(isInside == false){
 //   console.log('isInside false');
 // }
 if (isMenu == false ) {
   findActive();
   // toggle_menu();
   // console.log('isMenu false');
 }


});
