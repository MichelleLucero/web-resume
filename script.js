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
    var scrollPosition = document.documentElement.scrollTop;  // current scroll position
    for (i in sections) {
      // if a section's position is less than or equal to the current position (8 is a buffer)...
      if ((sections[i] - 8) <= scrollPosition) {
        console.log("44 here!!!!");
        // ... then add the class to the matching menu item.
        console.log("sections: " + i);
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();
