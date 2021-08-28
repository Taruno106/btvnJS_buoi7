// bt5: Tính giai thừa

function tinhGiaiThua(){
    var n = document.getElementById("inputNumN").value;
    var product = 1;

    for (var i = 1; i <= n ; i++){
        product *= i;
    }
    
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + product;
}


document.getElementById("btnLoop5").onclick = tinhGiaiThua;