document.getElementById("incrementItem1").addEventListener('click', function () {
    item1Calculation(1);

})

document.getElementById("decrementItem1").addEventListener('click', function () {
    item1Calculation(-1);
})


function item1Calculation(positive) {
    quantity = getInteger(document.getElementById("quantityOfItem1").value);

    if (positive < 0 && quantity < 1) {

    } else {
        quantity = quantity + positive;
        document.getElementById("quantityOfItem1").value = quantity;
        price = 1219;
        updateItem("priceOfItem1", quantity, price);
        if (positive < 0) {
            totalCalculation(-1 * price);
        } else {
            totalCalculation(price);
        }
        // console.log(`Quantity: ${quantity} Price: ${price} Amount ${quantity * price}`);
    }

}

document.getElementById("incrementItem2").addEventListener('click', function () {

    item2Calculation(1);


})

document.getElementById("decrementItem2").addEventListener('click', function () {
    console.log("Click marche");
    item2Calculation(-1);


})

function item2Calculation(positive) {
    quantity = getInteger(document.getElementById("quantityOfItem2").value);

    if (positive < 0 && quantity < 1) {

    } else {
        quantity = quantity + positive;
        document.getElementById("quantityOfItem2").value = quantity;
        price = 59;
        updateItem("priceOfItem2", quantity, price);
        if (positive < 0) {
            totalCalculation(-1 * price);
        } else {
            totalCalculation(price);
        }
        //console.log(`Quantity: ${quantity} Price: ${price} Amount ${quantity * price}`);
    }


}

function totalCalculation(price) {
    subtotal = getInteger(document.getElementById("subtotal").innerText);
    document.getElementById("subtotal").innerText = subtotal + price;
    tax = getInteger(document.getElementById("tax").innerText)
    totalTax = ((subtotal + price) * 0.05).toFixed(2);
    document.getElementById("tax").innerText = totalTax;
}


function updateItem(itemId, quantity, price) {
    document.getElementById(itemId).innerText = price * quantity;

}

function getInteger(value) {
    return parseInt(value);
}