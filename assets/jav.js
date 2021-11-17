function itemSeleccionado()
{
    /* Para obtener el texto */
    let combo = document.getElementById("cat");
    let selec = combo.options[combo.selectedIndex].text;
    // Obtener la instancia del objeto XMLHttpRequest
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // Asignación de la función callback
    peticion_http.onreadystatechange = muestraContenido;
    // Configurar la petición
    if(selec == "Aventura"){

        peticion_http.open('GET', 'cat1.html', true);
            
        // Enviar la petición al servidor
        peticion_http.send(null);
            

    }
    else if(selec == "Deportes"){

        peticion_http.open('GET', 'cat2.html', true);
        // Enviar la petición al servidor
        peticion_http.send(null);
            
    }
    else if(selec== "Acción"){

        peticion_http.open('GET', 'cat3.html', true);
        // Enviar la petición al servidor
        peticion_http.send(null);
            
    }
    else{
        document.getElementById("add").innerHTML = ""
        
    }   

        // Defincioón del función callback
        function muestraContenido() {
            if (peticion_http.readyState == 4) {
                if (peticion_http.status == 200) {
                    var mi_contenedor = document.getElementById("add");
                    mi_contenedor.innerHTML = peticion_http.responseText;
                }
            }
        }
}

function genera_Fila(tableID , nom, pre) {
    // Obtiene una referencia a la tabla
    var idTabla = document.getElementById(tableID);
  
    // Inserta una fila en la tabla, en el índice 0
    var nuevaFila   = idTabla.insertRow(0);
  
    // Inserta una celda en la fila, en el índice 0
    var nuevaColumna  = nuevaFila.insertCell(0);
    var nuevaColumna2 = nuevaFila.insertCell(1);

  
    // Añade un nodo de texto a la celda
    var nombre  = document.createTextNode(nom);
    var precio  = document.createTextNode(pre);
 
    nuevaColumna.appendChild(nombre);
    nuevaColumna2.appendChild(precio);


    //Colocar estilos de la clase table de bootstrap
    nuevaFila.setAttribute("class","table-light")

}
