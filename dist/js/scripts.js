
//oculta el titulo y la flecha del header al abrir el menu en tamaño 375px
function ocultar(){
  var x= document.getElementById("title-page");
  if(x.style.display ==="none"){
    x.style.display = "block";
  }else{
    x.style.display = "none"
  }
    var x= document.getElementById("arrow-down");
  if(x.style.display ==="none"){
    x.style.display = "block";
  }else{
    x.style.display = "none"
  }

}



function chbg2(color){
  document.getElementById('b2').style.opacity= color;
}

function chbg1(color){
  document.getElementById('b1').style.opacity= color;
}