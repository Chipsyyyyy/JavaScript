

function calculate(){

    const toatlAmount = document.getElementById("total-amount"); //Access the total amount element in the HTML file
    const principalInput = document.getElementById("principal"); //Access the principal amount input in the HTML file
    const rateInput = document.getElementById("rate");  //Access the interest rate input in the HTML file
    const yearsInput = document.getElementById("years"); //Access the years input in the HTML file

    let principal = Number(principalInput.value); //Declare a principal value which is typecasted to be a number if a user decides to put anything other than a string
    let rate = Number(rateInput.value/100); //Declare the interest rate by dividing by 100 e.g., 2 => 0.2 aka 2%
    let years = Number(yearsInput.value); //Declare a variable for the years

    if(principal < 0 || isNaN(principal)){ //The following 3 If statements check if the input is either negative number or not a number
        principal = 0;                      //Reset the value of principal to 0
        principalInput.value = 0;           //And change it on the HTML input
    }

    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }

    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years); //The formula for compound interest

    toatlAmount.textContent = result.toLocaleString(undefined, {style : "currency", currency: "AUD"}); //Changing the total amount text value in the HTML file and 
                                                                                                    //casting the toLocaleString method to change the currency display depending on the country
}