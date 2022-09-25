const InitialP = document.querySelector("#initial-price");
const CurrentP = document.querySelector("#current-price");
const Quantity = document.querySelector("#quantity");
const Submit = document.querySelector("#btn");
const OutputBox = document.querySelector("#output");
const Main = document.querySelector("#main");


function calc(initial, quant, current) {
    if(initial > current) {
        const loss = (initial - current) * quant;
        const lossPer = (loss / initial) * 100;
        showOutput("Hey the loss is "+loss+" and the loss percentage is "+lossPer+"%");
    } else if(current > initial) {
        const profit = (current - initial) * quant;
        const profitPer = (profit / initial) * 100;
        showOutput("Hey the profit is "+profit+" and the profit percentage is "+profitPer+"% ");
    } else {
        showOutput("Error");
    }
}

function submit() {    
    Main.style.display = 'none';
    var ip = Number(InitialP.value);
    var qty = Number(Quantity.value);
    var cp = Number(CurrentP.value);

    calc(ip, qty, cp);

}

function showOutput(message) {
    OutputBox.innerHTML = message;
}

Submit.addEventListener("click", submit);