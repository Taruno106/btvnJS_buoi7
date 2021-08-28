// bt4: Tính tổng

function tinhTong(){
    var x = parseFloat(document.getElementById("inputX").value);
    var n = parseInt(document.getElementById("inputN").value);
    var s = 0;
    for (var i = 1; i <= n ;i++){
        s = s + Math.pow(x,i); 
    }
    //console.log(s);
    document.getElementById("txtResult4").innerHTML = "Tổng: " + s;
    
}
document.getElementById("btnLoop4").onclick = tinhTong;



