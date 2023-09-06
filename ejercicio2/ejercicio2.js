document.addEventListener("DOMContentLoaded",function(event){
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("principal").style.top = "0";
  } else {
    document.getElementById("principal").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  }
   });

  function ocultar (i) {
    var x = document.getElementById(i);

  if (x.style.display === "none") {
    document.getElementById("luz").style.display = "none";
    document.getElementById("gas").style.display = "none";
    document.getElementById("movElectrica").style.display = "none";
    document.getElementById("solar").style.display = "none";
    document.getElementById("eficiencia").style.display = "none";
    document.getElementById("interesa").style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
    }
  }

