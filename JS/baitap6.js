// bt6: Tạo thẻ div

function taoTheDiv(){
    var content = "";
    for (var i = 1; i <= 10 ; i++){
        if (i % 2 == 0){
            content += `<div style="background: red; color: white">Div chẵn</div>`;
            // document.getElementById("txtResult6").innerHTML = content;
            // document.getElementById("txtResult6").style.background = 'red';
        } else {
            content += `<div style="background: blue; color: white">Div lẻ</div>`;
        }
        document.getElementById("txtResult6").innerHTML = content;
    }    
}

document.getElementById("btnLoop6").onclick = taoTheDiv;