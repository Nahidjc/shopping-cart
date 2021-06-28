

function productCalculation(positive, productQuantityId, productPriceId, price) {
    quantity = getInteger(document.getElementById(productQuantityId).value);
    console.log(price);


    if (positive < 0 && quantity < 1) {

    } else {
        quantity = quantity + positive;
        document.getElementById(productQuantityId).value = quantity;
        updateItem(productPriceId, quantity, price);
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
    totalTax = ((subtotal + price) * 0.1).toFixed(2);
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