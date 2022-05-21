function openNav() {
  document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function changeNav() {
  if (document.getElementById("mySidenav").style.width == "30%")
    closeNav();
  else
    openNav();
}