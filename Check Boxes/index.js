const myCheckbox = document.getElementById("myCheckbox");
const myVisa = document.getElementById("visaBtn");
const myMastercard = document.getElementById("mastercardBtn");
const myPaypal = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(myVisa.checked){
        paymentResult.textContent = `You are paying with Visa!`
    }
    else if(myMastercard.checked){
        paymentResult.textContent = `You are paying with Mastercard!`
    }

    else if (myPaypal.checked){
        paymentResult.textContent = `You are paying with Paypal!`
    }

    else{
        paymentResult.textContent = `You need to select a payment method!`
    }
}

