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

    }


}

function totalCalculation(price) {
    subtotal = getInteger(document.getElementById("subtotal").innerText);
    document.getElementById("subtotal").innerText = subtotal + price;
    tax = getInteger(document.getElementById("tax").innerText)
    totalTax = ((subtotal + price) * 0.05).toFixed(2);
    document.getElementById("tax").innerText = totalTax;
    totalAmount = (subtotal + price) + getInteger(totalTax);
    document.getElementById("total").innerText = totalAmount;
    console.log(totalAmount);
}


function updateItem(itemId, quantity, price) {
    document.getElementById(itemId).innerText = price * quantity;

}

function getInteger(value) {
    return parseFloat(value);
}

document.getElementById("removeItem1").addEventListener('click', function () {
    let parentItem = document.getElementById("itemswrapper");
    let childItem = document.getElementById("item1");
    let removeAmount = getInteger(document.getElementById("priceOfItem1").innerText);
    totalCalculation(-1 * removeAmount);
    parentItem.removeChild(childItem);

})

document.getElementById("removeItem2").addEventListener('click', function () {
    let parentItem = document.getElementById("itemswrapper");
    let childItem = document.getElementById("item2");
    let removeAmount = getInteger(document.getElementById("priceOfItem2").innerText);
    totalCalculation(-1 * removeAmount);
    parentItem.removeChild(childItem);

})

document.getElementById("checkoutbtn").addEventListener('click', function () {
    parentItem = document.getElementById("shoppingcart").style.display = "none";
    document.getElementById("formPortion").style.display = "block";
})

document.getElementById("submitButton").addEventListener('click', function () {
    parentItem = document.getElementById("formPortion").style.display = "none";
    document.getElementById("orderDetails").style.display = "block";

    totalPriceItem1 = document.getElementById("priceOfItem1").innerText;
    totalPriceItem2 = document.getElementById("priceOfItem2").innerText;

    totalQuantityItem1 = document.getElementById("quantityOfItem1").value;
    totalQuantityItem2 = document.getElementById("quantityOfItem2").value;

    document.getElementById("setAmountItem1").innerText = totalPriceItem1;
    document.getElementById("setAmountItem2").innerText = totalPriceItem2;

    document.getElementById("setQuantityItem1").innerHTML = totalQuantityItem1;
    document.getElementById("setQuantityItem2").innerHTML = totalQuantityItem2;

    subtotal = document.getElementById("subtotal").innerText;
    tax = document.getElementById("tax").innerText;
    total = document.getElementById("total").innerText;

    document.getElementById("setSubTotal").innerHTML = subtotal;
    document.getElementById("setTax").innerHTML = tax;
    document.getElementById("setTotal").innerHTML = total;

})