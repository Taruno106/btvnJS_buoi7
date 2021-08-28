// bt7: In số nguyên tố

function checkPrime(soNguyen) {
    var count = 0;
    for (var i = 2; i <= Math.sqrt(soNguyen); i++) {
        if (soNguyen % i == 0) {
            count++;
        }
    }
    if (count == 0 && soNguyen > 1) {
        // console.log("số nguyên tố: " + soNguyen);
        return soNguyen;
    }
}

function inSoNguyenTo() {
    var n = document.getElementById("inputPrime").value;
    var content = "";
    for (var i = 1; i <= n; i++) {
        var isPrime = checkPrime(i);
        if (isPrime){
            content += " " + isPrime;
        }
    }
    document.getElementById("txtResult7").innerHTML = content;
}
document.getElementById("btnLoop7").onclick = inSoNguyenTo;
