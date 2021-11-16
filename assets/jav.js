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

function genera_tabla(nombre, precio) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByClassName("addT")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 1; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr")
        
      for (var j = 0; j < 1; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        //var a = document.getElementById(id).value;

        
        //var nom= document.getElementById("nom").textContent;
        //var prec = document.getElementById("pre").textContent;
        
        var celda = document.createElement("td")
        var celda2 = document.createElement("td")
        var textoCelda = document.createTextNode(nombre);        
        var textoCelda2 = document.createTextNode(precio);

        celda.appendChild(textoCelda);
        celda2.appendChild(textoCelda2);
        hilera.appendChild(celda);
        hilera.appendChild(celda2);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("class", "table");
    
  }


