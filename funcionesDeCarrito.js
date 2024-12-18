document.addEventListener("DOMContentLoaded", () => 
    {
           cargarTabla()
           cargarTotal()

        function cargarTabla(){

            let lista = JSON.parse(localStorage.getItem("cart")) || []
            let tablaDom= document.querySelector(`.lista-carrito`)
                 
                   lista.forEach(element => {
                     let unaFila = document.createElement("tr")
              /*  console.log(`nombre es ${element.title}`)*/
        
                unaFila.innerHTML= `<td> <img src="${element.image}" class="foto-carrito" alt="foto-carrito"> </td> 
                <td class="tableId">${element.id}</td>
                <td class="celda-nombre">${element.title}</td>
                <td>${element.price}</td> 
                <td> <button class="botonEliminarDeCarrito" > Eliminar </button> </td>`

                let botonEliminar = unaFila.querySelector(".botonEliminarDeCarrito")
                botonEliminar.addEventListener("click", ()=>{
                    borrarElementoCarrito(element)
                })
        
                tablaDom.appendChild(unaFila)
                
                                        });

         let botonDeComprar= document.querySelector(`.botonComprar`)
         botonDeComprar.addEventListener("click", ()=>{
                    efectuarCompra()
                })
                
                            }


        function borrarElementoCarrito(element){
            let lalista =  JSON.parse(localStorage.getItem("cart") )
            let listaFiltrada =[];
            lalista.forEach(unRegistro => {
                if(unRegistro.id != element.id)
                {
                    listaFiltrada.push(unRegistro)
                }
            })
            localStorage.removeItem("cart")
            localStorage.setItem("cart", JSON.stringify(listaFiltrada))
            let tablaDom= document.querySelector(`.lista-carrito`)
            
          limpiarTabla(tablaDom)
            cargarTabla()
            cargarTotal()
        }
        function efectuarCompra(){
            
            let lalista =  JSON.parse(localStorage.getItem("cart") )
            let cantidadProductos =lalista.length
            let monto=0;
            

            lalista.forEach(element => {
                monto = monto+ element.price
            })

            Swal.fire({
                title: 'Gracias por tu compra',
                text: `La cantidad de productos es ${cantidadProductos} por un monto total de $ ${(monto*1.21).toFixed(2)}`,
                icon: 'success',
                confirmButtonText: 'Hasta pronto!'
              })
        }

        function limpiarTabla(tab){
            for(var i = 1;i<tab.rows.length;){
                tab.deleteRow(i);
            }

        }


        function cargarTotal(){

            let tablaDom = document.querySelector(`.lista-carrito`)
            let lalista =  JSON.parse(localStorage.getItem("cart") )
            let total = 0;

            lalista.forEach(unRegistro => {

                {
                   total += unRegistro.price
                }              

            })

            let filaSubTotal = document.createElement("tr")
            let filaTotal = document.createElement("tr")
            


            filaSubTotal.innerHTML=`
                            <td>.</td>
                            <td  class="tableId">.</td>
                            <td class="celda-nombre">.</td>
                            <td> Subtotal:</td> 
                           <td>$ ${total.toFixed(2)}</td>
                                   `
                      
            filaTotal.innerHTML=`
                      <tr>
                            <td>.</td>
                            <td  class="tableId">.</td>
                            <td class="celda-nombre">.</td>
                            <td>Total:</td> 
                           <td>$ ${(total*1.21).toFixed(2)} </td>
                      </tr>
                    `



                      tablaDom.appendChild(filaSubTotal)
                      tablaDom.appendChild(filaTotal)

        }

})