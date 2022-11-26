const frutas = []


confirmacion = confirm("Quieres comprar una fruta?")


while(confirmacion) {	
	frutas[frutas.length] = prompt("Introduce el nombre de la fruta: " )
	confirmacion = confirm("Quieres comprar otra fruta?")
}


console.log("Tu carrito es:")


for (let fruta of frutas) {
	console.log(fruta)
}