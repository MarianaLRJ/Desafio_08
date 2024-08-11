let email = 'alta@gmail.com';
let password = '1234';
alert('BIENVENIDO A LA CARGA DE PRODUCTOS');


alert ('Por favor, confirma tu mail!');

let emailUser = prompt('Introduce tu Email: ');
let passwordUser = prompt('Introduce tu Password: ');

console.log(window);

if(email == emailUser && password == passwordUser){
    console. log ('Bienvenido a tu cuenta')
alert ('Bienvenido a la página Alta');
} else{
    alert ("El mail/password no coinciden")
    window.location= "../index.html"
}

