function cambiarMensaje(id) {
  document.getElementById(""+id+"").innerHTML = "Paragraph changed.";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function changeNav() {
  if (document.getElementById("mySidenav").style.width == "100%")
    closeNav();
  else
    openNav();
}