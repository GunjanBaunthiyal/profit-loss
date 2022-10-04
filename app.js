const InitialP = document.querySelector("#initial-price");
const CurrentP = document.querySelector("#current-price");
const Quantity = document.querySelector("#quantity");
const Submit = document.querySelector("#btn");
const OutputBox = document.querySelector("#output");
const Main = document.querySelector("#main");


function calc(initial, quant, current) {
    if(initial === "" || quant === "" || current === ""){
        printOutput("Please enter all the values. <br />")
    } else if(Number(initial) <= 0 || Number(quant) <= 0 || Number(current) <= 0 ) {
        printOutput("Values cannot be less than 0. Please check!! <br/>");
    }
    else if(initial > current) {
        const loss = (initial - current) * quant;
        const lossPer = (loss / (initial*quant)) * 100;
        printOutput("Hey the loss is "+loss+" and the loss percentage is "+lossPer+"%");
    } else if(current > initial) {
        const profit = (current - initial) * quant;
        const profitPer = (profit / (initial*quant)) * 100;
        printOutput("Hey the profit is "+profit+" and the profit percentage is "+profitPer+"% ");
    } else {
        printOutput("Error");
    }
}

function submit() {    
    var ip = Number(InitialP.value);
    var qty = Number(Quantity.value);
    var cp = Number(CurrentP.value);

    calc(ip, qty, cp);

}

function printOutput(message) {
    OutputBox.innerHTML = message;
}

Submit.addEventListener("click", submit);