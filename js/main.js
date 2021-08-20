function getProductInput(product, perProductPrice, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productInput.value) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productInput.value) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * perProductPrice;
    updateTotal();
}
//get product Number
function getProductNumber(product) {
    const productNumber = document.getElementById(product + '-number').value;
    return productNumber;
}
// update total balance
function updateTotal() {
    const totalPhone = getProductNumber('phone') * 1219;
    const totalCase = getProductNumber('case') * 59;
    const totalRedBag = getProductNumber('red-bag') * 110;
    const totalBlueBag = getProductNumber('blue-bag') * 115;
    const totalShoe = getProductNumber('shoe') * 150;
    const subTotal = (totalPhone + totalCase + totalRedBag + totalBlueBag + totalShoe);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('price-total').innerText = totalPrice;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    getProductInput('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    getProductInput('phone', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
    getProductInput('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    getProductInput('case', 59, false);
})
document.getElementById('red-bag-plus').addEventListener('click', function () {
    getProductInput('red-bag', 110, true);
});
document.getElementById('red-bag-minus').addEventListener('click', function () {
    getProductInput('red-bag', 110, false);
})
document.getElementById('blue-bag-plus').addEventListener('click', function () {
    getProductInput('blue-bag', 115, true);
});
document.getElementById('blue-bag-minus').addEventListener('click', function () {
    getProductInput('blue-bag', 115, false);
})
document.getElementById('shoe-plus').addEventListener('click', function () {
    getProductInput('shoe', 150, true);
});
document.getElementById('shoe-minus').addEventListener('click', function () {
    getProductInput('shoe', 150, false);
});







/*
function updateproductInput(product, perProductPrice, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productInput = productInput.value;
    if (isIncreasing == true) {
        productInput = parseInt(productInput.value) + 1;
    } else if (productInput > 0) {
        productInput = parseInt(productInput.value) - 1;
    }
    productInput.value = productInput;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput.value * perProductPrice;
    calculateTotalPrice();
}
//get product number
function getProductInput(product) {
    const productInput = document.getElementById(product + '-number').value;
    return productInput;
}
// update total price
function calculateTotalPrice() {
    const phoneTotal = getProductInput('phone') * 1219;
    const caseTotal = getProductInput('case') * 59;
    const productSubTotal = phoneTotal + caseTotal;
    const tax = productSubTotal / 10;
    const productTotalPrice = productSubTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = productSubTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = productTotalPrice;

}
//phone input number and price update event handler increasing
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductInput('phone', 1219, true);
});
//phone input number and price update event handler decreasing
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductInput('phone', 1219, false);
});
//case input number and price update event handler increasing
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductInput('case', 59, true);
});
//case input number and price update event handler decreasing
document.getElementById('case-minus').addEventListener('click', function () {
    updateproductInput('case', 59, false);
})
*/