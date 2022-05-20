console.log("JavaScript loaded...");

// Get the enter input of the validation input box.
var inputValidation = document.getElementById("cpf-input");
inputValidation.addEventListener("keydown", function (e) {
    if(e.key == "Enter"){
        validation();
    }
});

// Function to validate an cpf.
function validation() {
    console.log("Validation started...");
    
    var cpf = document.getElementById("cpf-input").value;
    console.log("The CPF is: " + cpf);

    // Show the appropiate message and change the input color.
    if(cpfValidation(cpf)) {
        document.getElementById("span-valid").style.display = "block";
        document.getElementById("span-invalid").style.display = "none";
        document.getElementById("cpf-input").style.borderColor = "rgb(1,169,1)"
    }
    else {
        document.getElementById("span-invalid").style.display = "block";
        document.getElementById("span-valid").style.display = "none";
        document.getElementById("cpf-input").style.borderColor = "rgb(166,0,0)"
    }

}

// Function to validate the cpf digits.
function cpfValidation(cpf){

    // Checking by size first.
    if(cpf.length != 11){
        console.log("Invalid by size, " + cpf.length);
        return false;
    }
    else {
        var numbers =  cpf.substring(0, 9); // Take only the main numbers.
        console.log("Only numbers = ", numbers);
        var digits = cpf.substring(9);
        console.log("Digits: " + digits);

        
        
        // First digit verification.
        var multiplication = 0;
        for(var i = 10; i > 1; i--){
            multiplication += i * numbers[10-i];
            console.log(i + " * " + numbers[10-i] + " = " + i*numbers[10-i]);
        }
        console.log("Multplication: " + multiplication);
        multiplication = (multiplication*10)%11;
        if(multiplication == 10) {
            multiplication = 0;
        }
        var result = (multiplication%11) == digits[0];
        if(!result) {
            console.log("First digit is invalid.");
            return false;
        }

        // Second digit verification.
        multiplication = 0;
        numbers = cpf.substring(0, 10);
        for(var i = 11; i > 1; i--){
            multiplication += i * numbers[11-i];
            console.log(i + " * " + numbers[11-i] + " = " + (i*numbers[11-i]));
        }
        console.log("Multplication: " + multiplication);
        multiplication = (multiplication *10) % 11; 
        if(multiplication == 10) {
            multiplication = 0
        }
        result = multiplication == digits[1];
        if(!result) {
            console.log("Second digit is invalid.");
        }

        // Verifying for every character equal.
        var equals = 0;
        for (var i = 0; i < 10; i++){
            equals = 0;
            for(var j = 0; j < 11; j++){
                if(cpf[j] == i) {
                    equals ++;
                }
            }

            if(equals == 11) {
                console.log("Invalid by repetitive numbers.");
                return false;
            }
        }
    }
    // Valid !
    return true;
}

// Function to generate and show the CPF.
function generateCPF () {
    console.log("Starting to generate the CPF");
    let cpfGenerated = '';
    for(let i = 0; i < 9; i++) {
        // Add a number between 0 and 9 and add to the string.
        let numberTemp = Math.floor(Math.random()*10);
        cpfGenerated += numberTemp.toString();
    }
    console.log(`First step done ${cpfGenerated}.`);
    
    // Generate and add the first digit.
    let fullMultiplication = 0;
    for(let i = 0; i < 9; i++) {
        fullMultiplication += parseInt(cpfGenerated[i]) * (10 - i)
        console.log(`${parseInt(cpfGenerated[i])} * ${10-i} = ${(10-i)*parseInt(cpfGenerated[i])}`);
    }
    console.log(`The full multiplication is : ${fullMultiplication}`);
    let rest = ((fullMultiplication*10)%11) == 10 ? '0' : ((fullMultiplication*10)%11).toString();
    cpfGenerated += rest;
    console.log(`First digit generated ${rest}, ${cpfGenerated}`);

    // Generate and add the seccond digit.
    fullMultiplication = 0;
    for(let i = 0; i < 10; i++) {
        fullMultiplication += parseInt(cpfGenerated[i] * (11-i));
        console.log(`${parseInt(cpfGenerated[i])} * ${11-i} = ${(11-i)*parseInt(cpfGenerated[i])}`);
    }
    console.log(`The full multiplication is : ${fullMultiplication}`);
    rest = ((fullMultiplication*10)%11) == 10 ? '0' : ((fullMultiplication*10)%11).toString();
    cpfGenerated += rest;
    console.log(`Second digit generated ${rest}, ${cpfGenerated}`);

    let spanOutput = document.getElementById('cpf-generated-box');
    spanOutput.innerHTML = cpfGenerated;
}