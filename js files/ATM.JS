alert("please insert your card");
var pin_code = prompt("Enter your pin");
alert("VIEW THE OPTIONS BELOW./n 1.Change your current pin-code./n 2.Check your current balance./n 3.Make a deposit./n 4.Make a withdrawal.")
var option = prompt("SELECT AN OPTION");
console.log(option);


if (option === "1") {
    var pin = prompt("ENTER YOUR CURRENT PIN.");
    var pin_1 = prompt("RE-ENTER THE PIN TO CONFIRM IT.");
    if (pin === pin_1) {
        var pin_2 = prompt("ENTER NEW PIN.");
    } else {
        alert("PLEASE ENTER CORRECT PIN.");
    }
}

if (option === "2") {
    var pin = prompt("ENTER YOUR PIN.");
    if (pin === pin_code) {
        alert("YOU HAVE A BALANCE OF .....REMAINING IN YOUR ACCOUNT");
    } else if (pin != "pin_code") {
        alert("PIN DOES NOT MATCH, PLEASE ENTER CORRECT PIN");
    }
}


if (option === "3") {
    var amount = prompt("ENTER THE AMOUNT TO DEPOSIT.");
    alert("PLACE AMOUNT IN CASH TRAY.");
}


if (option === "4") {
    var amount = prompt("ENTER THE AMOUNT TO WITHDRAW.");
    var amount_1 = prompt("RE-ENTER THE AMOUNT TO CONFIRM IT.");
    if (amount === amount_1) {
        var pin = prompt("ENTER YOUR PIN");
    } else if (amount != amount_1) {
        alert("AMOUNT DOES NOT MATCH, PLEASE ENTER CORRECT AMOUNT");
    }
    if (pin === pin_code) {
        alert("YOUR WITHDRAWAL IS BEING INITIATED");
    } else if (pin != pin_code) {
        alert("PIN DOES NOT MATCH, PLEASE ENTER CORRECT PIN");
    }
} else {
    alert("PLEASE SELECT AN OPTION.");
}