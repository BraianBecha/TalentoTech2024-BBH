var contenedorDeTarjetas = document.getElementsByClassName("cardContainer");
var productosExhibidosPorDefecto = document.getElementsByClassName("card");
var productosDeApi 

 fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data =>  mostrarProductos(data,"cardContainer"));




function mostrarProductos(dataDeProductos, claseDeContenedor)
{
    let stringCards =''
    borrarPorClase(claseDeContenedor)
    dataDeProductos.forEach((element) => {
        let unaCard= generarCard(element)
        stringCards=stringCards+unaCard  });

    document.querySelector(`.${claseDeContenedor}`).innerHTML=stringCards
   /* console.log(`se agregó el codigo ${stringCards}`)*/

}



function borrarPorClase(laClase) {
    document.querySelectorAll(`.${laClase}`).forEach(elemento => {
        elemento.innerHTML = ''; // Limpia el contenido de cada elemento
    });
} 

function generarCard(element){

    let unString= `
    
    <div class="card"> 
                  <img class="fotoProducto" src="${element.image}" alt="">    
                      
                     <div  class="descripcionCard">
                     <div class="nombre">
                        
                        <b>
                        <h4>${element.title}</h4>
                     </b></div> 
                     
                     <div class="precio">$ ${element.price}</div> <div class="carritoDiv">  <img class="carrito" src="Images/shopping-cart-add_3916640.png" alt="carritus"> </div>
                     </div>


                  </div> `
                 /* console.log(`un string es: ${unString}`)*/
                  return unString;
                
}
