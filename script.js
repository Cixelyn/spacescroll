function scroll() {
  if(!document.hasFocus()) return;

  var gps = navigator.getGamepads() 
  if(gps.length < 3) return;


  var scroll_x = 0;
  var scroll_y = 0;
  for(var i = 0; i < gps.length; i++ ) {
    var gp = gps[i];
    if(gp == undefined) continue;
    if(gp.axes == undefined) continue;
    if(gp.axes.length != 6) continue;
    scroll_x += gp.axes[3]*100;
    scroll_y += gp.axes[4]*-50;
  }
  
  window.scrollBy(scroll_y, scroll_x);
}


function step(timestamp) {
  scroll();
  window.requestAnimationFrame(step);
}

console.log("Loading SpaceScroll");
step();