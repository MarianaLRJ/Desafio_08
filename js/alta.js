let email = 'alta@gmail.com';
let password = '1234';


alert ('Hola!!! Por favor confirma tu mail!');

let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');

console.log(window);

if(email == emailUser && password == passwordUser){
    console. log ('Bienvenid@ a tu cuenta')
alert ('Bienvenid@ a tu cuenta');
 window.location= "../Pages.html/Categorías.html"
} else{
    alert ("El mail/password no coinciden")
    window.location= "../index.html"
}

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);
btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');