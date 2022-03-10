function convert(){
    var inputValue = document.getElementById("value");
    var realValue = Number(inputValue.value);
    console.log("Real value " + realValue)

    var conversionRate = document.getElementById("conversionRate");
    var  conversionRateValue = Number(conversionRate.value)
    console.log("Conversion rate " + conversionRate)

    var finalPrice = (realValue*conversionRateValue).toFixed(2);

    document.getElementById("resultBox").innerHTML =  finalPrice;
    console.log(finalPrice);
}

// Call this function by one and one seccond.
setInterval((convert), 1000)