console.log(" Howdy! ")

 function menuToggle() {
     var x = document.getElementById("myNavtoggle");
     if (x.className === "navtoggle") {
         x.className += " responsive"
         x.className += " responsive";
     } else {
         x.className = "navtoggle";
     }
 
    }