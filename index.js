let number = 123456.789;

// number = number.toLocaleString("en-US");
// number = number.toLocaleString("hi-IN");
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});



console.log(number);
