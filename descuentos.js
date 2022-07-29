function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultadoPrecio = document.getElementById("ResultPrice");
    resultadoPrecio.innerText = "El precio con descuento son: $" + precioConDescuento; 
}


function calculadoraConCupon(){
    const price = document.getElementById("PriceProduct");
    const priceValue = price.value;

    const coupon = document.getElementById("Coupon");
    const couponValue = coupon.value;

    const coupons = [
        {
            name: "jueves",
            discount: 30,
        },
        {
            name: "viernes",
            discount: 15.
        },
        {
            name: "sabado",
            discount: 5,
        }
    ];
    const cuponValido = function(cuponN){//cuponN es el array con objetos que tenemos 
        return cuponN.name === couponValue;
    }
   const cuponUsuario = coupons.find(cuponValido);
    if(!cuponUsuario){
        alert("Cupon invalido");
    }
    else{
        const descuento = cuponUsuario.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultadoPrecio = document.getElementById("PrecioConCupon");
        resultadoPrecio.innerText = "El precio con el descuento del cupon es: $" + precioConDescuento;
    }
}
