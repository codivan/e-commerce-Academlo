const tarjetas = [
  {
     id: 1,
     stock: 10,
     titulo: "Hoodies",
     price: 24.00,
     subtotal: 0,
     imagen:"./assets/img/featured1.png",
     units: 0,
     selected: false,
     position: 0
  },
  {
     id: 2,
     stock: 15,
     titulo: "Shirts",
     price: 14.00,
     subtotal: 0,
     imagen:"./assets/img/featured2.png",
     units: 0,
     selected: false,
     position: 0
  },
  {
     id: 3,
     stock: 20,
     titulo: "Sweatshirts",
     price: 24.00,
     subtotal: 0,
     imagen:"./assets/img/featured3.png",
     units: 0,
     selected: false,
     position: 0
  },
]

const btnSwitch = document.querySelector('.prender_apagar');
btnSwitch.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
})
window.addEventListener("DOMContentLoaded", (event) => {
  pintarTarjetas();
  button_view();
  pintarTarjetas_button_show_all();
  pintarTarjetas_button_hoodies();
  pintarTarjetas_button_shirts();
  pintarTarjetas_button_sweatshirts();
  pintarCarrito();
  pintarFooter();
  pintarFooter();  
});

//! RESPONSIVE DEL NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle("active")
})


//! CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM 
const tarjetasContenedor = document.getElementById("tarjetasContenedor");
function pintarTarjetas() {
  let html = "";
  for (let i = 0; i < tarjetas.length; i++) {
      html += `<article class="tarjeta">
                      <img src="${tarjetas[i].imagen}" alt="${tarjetas[i].titulo}" class="imagen__tarjeta"> 
                  <div class="cuerpo__tarjeta">                    
                      <button class="agregar__btn" data-id="${tarjetas[i].id}">+</button>
                      <p class="desc_price"> ${tarjetas[i].price}</p>
                      <p class="desc_stock">Stock: ${tarjetas[i].stock}</p>
                      <h2 class="titulo__tarjeta">${tarjetas[i].titulo}</h2>                                               
                  </div>
              </article>`;
  }
  tarjetasContenedor.innerHTML = html;
}
pintarTarjetas();

//! CREAR UNA FUNCION PARA LOS BOTONES DEL VIEW
const view = document.getElementById("view");
function button_view() {
  let html = "";
          html += `<div class="show_all">
                      <button type="button" name="button_show_all" class="button_show_all" id="button_show_all">Show all Category<br>11 Products</button>
                  </div>
                  <div class="hoodies">
                      <button type="button" name="button_hoodies" class="button_hoodies" id="button_hoodies">Hoodies<br>3 products</button>
                  </div>
                  <div class="shirts">
                      <button type="button" name="button_shirts" class="button_shirts" id="button_shirts">Shirts<br>4 products</button>
                  </div>
                  <div class="sweatshirts">
                      <button type="button" name="button_sweatshirts" class="button_sweatshirts" id="button_sweatshirts">Sweatshirts<br>4 products</button>
                  </div>`;
  view.innerHTML = html;
}
button_view();

//! CREACION DE LOS BOTONES ACTIVOS POR CADA PRENDA
view.addEventListener("click", (e) => {
  if (e.target.classList.contains("button_show_all")) {    
      function pintarTarjetas_button_show_all() {
          let html = "";  
     
          for (let i = 0; i < tarjetas.length; i++) {
              html += `<article class="tarjeta">
                              <img src="${tarjetas[i].imagen}" alt="${tarjetas[i].titulo}" class="imagen__tarjeta"> 
                          <div class="cuerpo__tarjeta">                    
                              <button class="agregar__btn" data-id="${tarjetas[i].id}">+</button>
                              <p class="desc_price">${tarjetas[i].price}</p>
                              <p class="desc_stock">Stock: ${tarjetas[i].stock}</p>
                              <h2 class="titulo__tarjeta">${tarjetas[i].titulo}</h2>                                               
                          </div>
                      </article>`;
          }
          tarjetasContenedor.innerHTML = html;               
  }
pintarTarjetas_button_show_all();
  }
  if (e.target.classList.contains("button_hoodies")) {   
      function pintarTarjetas_button_hoodies() {
              let html = "";
              html += `<article class="tarjeta">
                              <img src="${tarjetas[0].imagen}" alt="${tarjetas[0].titulo}" class="imagen__tarjeta"> 
                          <div class="cuerpo__tarjeta">                    
                              <button class="agregar__btn" data-id="${tarjetas[0].id}">+</button>
                              <p class="desc_price">${tarjetas[0].price}</p>
                              <p class="desc_stock">Stock: ${tarjetas[0].stock}</p>
                              <h2 class="titulo__tarjeta">${tarjetas[0].titulo}</h2>                                               
                          </div>
                      </article>`;

          tarjetasContenedor.innerHTML = html;               
  }
pintarTarjetas_button_hoodies();
  }
  if (e.target.classList.contains("button_shirts")) {      
      function pintarTarjetas_button_shirts() {
          let html = "";
              html += `<article class="tarjeta">
                              <img src="${tarjetas[1].imagen}" alt="${tarjetas[1].titulo}" class="imagen__tarjeta"> 
                          <div class="cuerpo__tarjeta">                    
                              <button class="agregar__btn" data-id="${tarjetas[1].id}">+</button>
                              <p class="desc_price">${tarjetas[1].price}</p>
                              <p class="desc_stock">Stock: ${tarjetas[1].stock}</p>
                              <h2 class="titulo__tarjeta">${tarjetas[1].titulo}</h2>                                               
                          </div>
                      </article>`;
          
          tarjetasContenedor.innerHTML = html;               
  }
pintarTarjetas_button_shirts();
  }
  if (e.target.classList.contains("button_sweatshirts")) {   
      function pintarTarjetas_button_sweatshirts() {
          let html = "";
              html += `<article class="tarjeta">
                              <img src="${tarjetas[2].imagen}" alt="${tarjetas[2].titulo}" class="imagen__tarjeta"> 
                          <div class="cuerpo__tarjeta">                    
                              <button class="agregar__btn" data-id="${tarjetas[2].id}">+</button>
                              <p class="desc_price">${tarjetas[2].price}</p>
                              <p class="desc_stock">Stock: ${tarjetas[2].stock}</p>
                              <h2 class="titulo__tarjeta">${tarjetas[2].titulo}</h2>                                               
                          </div>
                      </article>`;
          
          tarjetasContenedor.innerHTML = html;                
  }
pintarTarjetas_button_sweatshirts();
  }
});
const items= document.getElementById('items');
const footer= document.getElementById('footer');
const templateFooter =document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito={};
tarjetasContenedor.addEventListener("click", function(e){
  if (e.target.classList.contains("agregar__btn")) {
      console.log(e.target.parentElement);
      setCarrito(e.target.parentElement);        
  }
  e.stopPropagation()
});

items.addEventListener('click',function(e){
  btnAccion(e)
})
  const setCarrito=function(objeto){
   const producto = {
      id:objeto.querySelector(".agregar__btn").dataset.id,
      titulo:objeto.querySelector("h2").textContent,
      price:objeto.querySelector(".desc_price").textContent,
      stock:objeto.querySelector(".desc_stock").textContent,  
      imagen:`./assets/img/featured${objeto.querySelector(".agregar__btn").dataset.id}.png`,
      cantidad:1
          }
        let indice=producto.id;
        let maxStock=tarjetas[indice-1].stock;
         if(carrito.hasOwnProperty(producto.id)){
           producto.cantidad = carrito[producto.id].cantidad+1;
           if ( producto.cantidad > maxStock ){
             Swal.fire('Categoria '+producto.titulo, "No hay mas Stock Disponible", "success");
             return
           }
           //alert(carrito[producto.id].cantidad+' '+carrito[producto.id].stock +' ->'+typeof(parseInt(carrito[producto.id].cantidad)) );
        }
        carrito[producto.id]={...producto};
        pintarCarrito(); 
  }
  const pintarCarrito = function(){
  items.innerHTML = '';
      Object.values(carrito).forEach(producto =>{
          templateCarrito.querySelector('.img_col').src=producto.imagen,
          templateCarrito.querySelectorAll('p')[0].textContent=producto.titulo;
          templateCarrito.querySelectorAll('p')[1].textContent=producto.stock;
          templateCarrito.querySelectorAll('p')[2].textContent=producto.price;
          templateCarrito.querySelectorAll('p')[3].textContent=producto.cantidad;
          templateCarrito.querySelector('span').textContent= parseInt(producto.cantidad)*parseInt(producto.price,10) 
          templateCarrito.querySelector('.btn-info').dataset.id=producto.id
          templateCarrito.querySelector('.btn-danger').dataset.id=producto.id
          const clone = templateCarrito.cloneNode(true);
          fragment.appendChild(clone)
      }) 
          items.appendChild(fragment)
          pintarFooter()
}

//SUMAS Y RESTAR DEL CARRITO
const pintarFooter = function(){
     footer.innerHTML='';
     if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Cart Empty</th>
        `
        return;
     }
     const nCantidad = Object.values(carrito).reduce((acc,{cantidad})=>acc + cantidad,0)
     const nPrecio = Object.values(carrito).reduce((acc,{cantidad, price})=> acc + cantidad * price,0)
     templateFooter.querySelectorAll('p')[0].textContent=nCantidad;        
     templateFooter.querySelector('span').textContent=nPrecio;
     const clone = templateFooter.cloneNode(true);
     fragment.appendChild(clone);
     footer.appendChild(fragment);
let conteoTotal = function(){
  document.querySelector('.total_prod').textContent=nCantidad;
}   
conteoTotal(); 
/* empty cart*/       
  const btnVaciar = document.getElementById('vaciar-carrito')
  btnVaciar.addEventListener('click',function(){
     carrito={}
     pintarCarrito();
     document.querySelector('.total_prod').textContent=0; 
  })
  }

const btnAccion = e =>{
  if (e.target.classList.contains('btn-info')) {    // SUMAR CARRITO
     const producto = carrito[e.target.dataset.id];
     let indice=producto.id;
     let maxStock=tarjetas[indice-1].stock;
     if (producto.cantidad+1 > maxStock){
        Swal.fire('Categoria '+producto.titulo, "No hay mas Stock Disponible", "success");
        return
     }
     producto.cantidad++
     carrito[e.target.dataset.id] = {...producto};
     pintarCarrito();
  }

  if (e.target.classList.contains('btn-danger')) {//RESTAR CARRITO
     const producto = carrito[e.target.dataset.id];
     producto.cantidad--
     if (producto.cantidad===0) {
           delete carrito[e.target.dataset.id];
           document.querySelector('.total_prod').textContent=0;
     }
     pintarCarrito();
  }
  e.stopPropagation();
}

const carrito_img = document.querySelector(".carrito_img");
const contenedorSectionMyCard = document.querySelector(".contenedor_section_myCard")
contenedorSectionMyCard.style.visibility = 'hidden';
carrito_img.addEventListener("click",function (e){
  if (contenedorSectionMyCard.style.visibility === 'visible') {
      contenedorSectionMyCard.style.visibility = "hidden";
  }else{
      contenedorSectionMyCard.style.visibility = "visible";
  }
})
//! RESPONSIVE BARRA LATERAL DERECHA INTERNO
const carrito_img2 = document.querySelector(".carrito_img2");
const contenedorSectionMyCard2 = document.querySelector(".contenedor_section_myCard")
contenedorSectionMyCard2.style.visibility = 'hidden';
carrito_img2.addEventListener("click",function (e){
  if (contenedorSectionMyCard2.style.visibility === 'visible') {
      contenedorSectionMyCard2.style.visibility = "hidden";
  }else{
      contenedorSectionMyCard2.style.visibility = "visible";
  }
}) 
