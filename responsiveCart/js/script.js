let product_total_amt = document.querySelector('#product_total_amt');
let total_cart_amount = document.querySelector('#total_cart_amount');
let shipping_charge = document.querySelector('#shipping_charge');
let discount_code1 = document.querySelector('#discount_code1');
let error_trw = document.querySelector('#error_trw');

const decrementQuantity = (incdec, itemprice) => {
    let itemVal = document.getElementById(incdec, itemprice);
    var itemprice = document.getElementById(itemprice);
    if (itemVal.value <= 0) {
        itemVal.value = 0;
    } else {
        itemVal.style.backgroundColor = '#fff';
        itemVal.style.color = '#000';
        itemVal.value = parseInt(itemVal.value) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amount.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
};

const incrementQuantity = (incdec,itemprice) => {
    let itemVal = document.getElementById(incdec,itemprice);
    var itemprice = document.getElementById(itemprice);

    if (parseInt(itemVal.value) >= 5) {
        itemVal.value = 5;
        itemVal.style.backgroundColor = 'red';
        itemVal.style.color = '#fff';
    } else {
        itemVal.value = parseInt(itemVal.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
        total_cart_amount.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
};

// Discount code
const discountCode = () => {
    let totalAmtCurr = parseInt(total_cart_amount.innerHTML);
    if(discount_code1.value === 'Abul'){
        let newTotalAmt = totalAmtCurr - 10;
        total_cart_amount.innerHTML = newTotalAmt;
        error_trw.innerHTML = 'Hurry! You got discount.';
    }else{
        error_trw.innerHTML = 'Try Again! Valid code is Abul.';
    }
}