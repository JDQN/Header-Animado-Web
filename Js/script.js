let boton = document.getElementById("icono");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador == 0){
        enlaces.className = ("enlaces dos")
        contador = 1;
    }
    else
    {
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador = 0;
    }
})

/*AQUI EN EL JS TIENES LA OTRA PARTE DEL EFECTO DEL MENU
  LLAMANDO AL ICONO Y CON EL IF, ELSE LE DECIMOS SI CONTADOR ES 1 ABRE SI NO CIERRA 
  SI Y LO HACEMOS LLAMANDO enlace dos o enlace uno*/