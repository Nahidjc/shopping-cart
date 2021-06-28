document.getElementById("incrementItem1").addEventListener('click', function () {
    item1Calculation(1);

})


function item1Calculation(positive) {
    if (positive < 0 && quantity < 1) {

    } else {
        quantity = getInteger(document.getElementById("quantityOfItem1").value);
        quantity = quantity + positive;
        document.getElementById("quantityOfItem1").value = quantity;
        price = 1219;
        updateItem("priceOfItem1", quantity, price);
        console.log(`Quantity: ${quantity} Price: ${price} Amount ${quantity * price}`);
    }

}

document.getElementById("decrementItem1").addEventListener('click', function () {
    item1Calculation(-1);
})


function updateItem(itemId, quantity, price) {
    document.getElementById(itemId).innerText = price * quantity;
}

function getInteger(value) {
    return parseInt(value);
}