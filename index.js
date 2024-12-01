const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterVardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        submitResult.textContent = `You are subsctibed`;
    }
    else{
        submitResult.textContent=`You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with visa`;


    }
    else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with masterCard`;

    }
    else if(payPalBtn.checked){
        paymentResult.textContent=`You are paying with paypal`;

    }
    else{
        paymentResult.textContent=` You must choose a payment`;
    }
}
