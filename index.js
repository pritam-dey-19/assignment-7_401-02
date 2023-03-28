function clickHere() {
  var all = document.getElementsByClassName("box");
  for (let i = 0; i < all.length; i++) {
    if (i % 2 == 1) {
      all[i].style.color = "white";
      all[i].style.backgroundColor = "#01ff00";
    }
  }
  all[0].style.color = "white";
  all[0].style.backgroundColor = "blue";
  all[16].style.color = "white";
  all[16].style.backgroundColor = "#db7093";
  all[8].style.color = "white";
  all[8].style.backgroundColor = "#008000";
}
