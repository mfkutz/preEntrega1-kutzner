
let boton = document.getElementById("activaBoton")
boton.addEventListener("click", respuestaClic)

function respuestaClic() {

    //VARIABLES

    let producto1 = "Libro Aperturas";
    let producto2 = "Tablero de Ajedrez";
    let producto3 = "LLavero";
    let costoP1 = 2800;
    let costoP2 = 6200;
    let costoP3 = 1500;
    let seguirComprando = "SI";

    //FUNCIONES SEGUN EL METODO DE PAGO

    const descuento = x => x * 0.9;
    const interes = y => y * 1.15;

    //TIENDA ONLINE

    //inicia bucle para seguir comprando
    while (seguirComprando != "NO") {

        //entrada de datos
        let producto = prompt("Bienvenido a la tienda, por favor elige el producto que quiera comprar. \n 1) Libro Aperturas $2800 \n 2) Tablero de Ajedrez $6200 \n 3) LLavero $1500 ");

        //CONTROL DE FLUJO SEGUN ENTRADA
        if (producto == "1") {
            alert(`El producto seleccionado es: ${producto1} \n Precio: $${costoP1}`);

            let metodoDePago = prompt("Como desea abonar? \n 1) Efectivo - 10 % \n 2) Tarjeta de credito + 15%  \n 3) CANCELAR COMPRA");
            if (metodoDePago == "1") {
                let totalConDescuento = descuento(costoP1);
                alert(` Precio de lista: $${costoP1} \n Descuento (10%): -$${costoP1 - totalConDescuento} \n Total a pagar: $${totalConDescuento} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "2") {
                let totalConInteres = Math.ceil(interes(costoP1));
                alert(` Precio de lista: $${costoP1} \n Interes (15%): +$${totalConInteres - costoP1} \n Total a pagar: $${totalConInteres} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "3") {
                alert("Compra cancelada");
            }
            else {
                alert("Dato incorrecto");
            }

        }
        else if (producto == "2") {
            alert(`El producto seleccionado es: ${producto2} \n Precio: $${costoP2}`);

            let metodoDePago = prompt("Como desea abonar? \n 1) Efectivo - 10 % \n 2) Tarjeta de credito + 15%  \n 3) CANCELAR COMPRA");
            if (metodoDePago == "1") {
                let totalConDescuento = descuento(costoP2);
                alert(` Precio de lista: $${costoP2} \n Descuento (10%): -$${costoP2 - totalConDescuento} \n Total a pagar: $${totalConDescuento} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "2") {
                let totalConInteres = Math.ceil(interes(costoP2));
                alert(` Precio de lista: $${costoP2} \n Interes (15%): +$${totalConInteres - costoP2} \n Total a pagar: $${totalConInteres} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "3") {
                alert("Compra cancelada");
            }
            else {
                alert("Dato incorrecto");
            }
        }
        else if (producto == "3") {
            alert(`El producto seleccionado es: ${producto3} \n Precio: $${costoP3}`);

            let metodoDePago = prompt("Como desea abonar? \n 1) Efectivo - 10 % \n 2) Tarjeta de credito + 15%  \n 3) CANCELAR COMPRA");
            if (metodoDePago == "1") {
                let totalConDescuento = descuento(costoP3);
                alert(` Precio de lista: $${costoP3} \n Descuento (10%): -$${costoP3 - totalConDescuento} \n Total a pagar: $${totalConDescuento} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "2") {
                let totalConInteres = Math.ceil(interes(costoP3));
                alert(` Precio de lista: $${costoP3} \n Interes (15%): +$${totalConInteres - costoP3} \n Total a pagar: $${totalConInteres} `);
                alert("Gracias por tu compra!! ");
            }
            else if (metodoDePago == "3") {
                alert("Compra cancelada");
            }
            else {
                alert("Dato incorrecto");
            }
        } else {
            alert("El producto no se encuentra en la lista");
        };
        //OPCION DE SEGUIR COMPRANDO
        seguirComprando = prompt(` Desea realizar otra compra? \n Presione "ENTER" para continuar \n Escriba "NO" o presione la tecla Esc para finalizar `).toUpperCase();
    }

    alert("Hasta la proxima!! :) ");

}

//FIN
