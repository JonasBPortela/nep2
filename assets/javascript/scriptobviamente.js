var fechado = true;

function openNav() {
  if(fechado){
    document.getElementById("mySidenav").style.width = "17%";
    document.getElementById("conteudo").style.width = "83%";
    fechado = false;
  }
  else{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("conteudo").style.width = "100%";
    fechado = true;
  }
}
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("conteudo").style.width = "100%";
    fechado = true;
  }