var contenedorDeTarjetas = document.getElementsByClassName("cardContainer");
var productosExhibidosPorDefecto = document.getElementsByClassName("card");
var productosDeApi =[];
/*var carritoItemsStorage= JSON.parse(localStorage.getItem('cart') || []);*/


 fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data =>  mostrarProductos(data,"cardContainer"));


actualizarContador()

function mostrarProductos(dataDeProductos, claseDeContenedor)
{
    let stringCards =''
    borrarPorClase(claseDeContenedor)
    dataDeProductos.forEach((element) => {
        productosDeApi.push(element)
        let unaCard= generarCard(element)
/*
        const botonAgregar = card.querySelector("boton-carrito");
          botonAgregar.addEventListener("click", () => 
            {
            agregarAlCarrito(element);
          });*/

        
    
          document.querySelector(`.${claseDeContenedor}`).appendChild(unaCard)

    
     });

}



function borrarPorClase(laClase) {
    document.querySelectorAll(`.${laClase}`).forEach(elemento => {
        elemento.innerHTML = ''; 
    });
} 

function generarCard(element){

    const cardDiv = document.createElement("div");
          cardDiv.className = "card";

          cardDiv.innerHTML = `  
                  <img class="fotoProducto" src="${element.image}" alt="">    
                      
                     <div  class="descripcionCard">
                     <div class="nombre">
                        
                        <b>
                        <h4>${element.title}</h4>
                     </b></div> 
                     
                     <div class="precio">$ ${element.price}</div>  <button class="boton-carrito"> <img class="addCarrito" src="Images/shopping-cart-add_3916640.png" alt="carritus"> </button> </div> 
                   `
                   const botonAgregar = cardDiv.querySelector(".boton-carrito");
                   botonAgregar.addEventListener("click", () => 
                     {
                     agregarAlCarrito(element);                      
                   })
                  
                  return cardDiv;
                
}

function agregarAlCarrito(unProducto){

let cart = JSON.parse(localStorage.getItem("cart") ) || [];

cart.push(unProducto)
localStorage.setItem("cart", JSON.stringify(cart))
console.log(`se agrego al carrito el producto ${unProducto.title}`)
cart.addEventListener("change", actualizarContador())
  

}

function persistirEnLocalStorage(product){
/*
    try{
    let cart = JSON.parse(localStorage.getItem("cart") ) || [];
    cart.push(product)
    alert("se agregó al carrito un elemento ")    
}
catch(error){
    alert("error en la función persistirEnLocalStorage()")
}*/
let flag=0;
let cart = JSON.parse(localStorage.getItem("cart") ) || [];
cart.push(product);

if(flag=0){
    alert("se agregó al carrito un elemento ");
}

console.log("checkpoint1")
flag++
}

function mosrarLocalStorage(){

    let datos= localStorage.getItem("cart")
    console.log(`${datos}`)
}

function borrarLocalStorage(){


}

function actualizarContador(){
    let cart = JSON.parse(localStorage.getItem("cart") );
    if(cart.length != 0){
        document.querySelector(".contador").innerHTML = `Productos en Carrito: ${cart.length}` 
        
    }
    
}
