// bt2: Đếm số chia hết cho 3

function countDiv3(){
    var count = 0;

    //lệnh while
    // var i = 0;
    // while (i <= 1000) {
    //     if (i % 3 == 0){
    //         count++;
    //     }
    //     i++;
    // }

    //lệnh for
    for (var i = 0; i <= 1000 ;i++){
        if (i % 3 == 0){
            count++;
        }
    }

    document.getElementById("txtResult2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}

document.getElementById("btnLoop2").onclick = countDiv3;
