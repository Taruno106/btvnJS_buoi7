// bt1: In số nguyên dương chẵn/ lẻ

function inSoChanLe(){
    var soChan = "";
    var soLe = "";
    // var i = 0;  
    // while (i <= 100){
    //     if (i % 2 == 0){
    //         soChan += " " + i;
    //     } else {
    //         soLe += " " + i;
    //     }
    //     i++;
    // }
    //đặt console.log ở ngoài là nó thực hiện xong vòng lặp r mới in kq nối chuỗi 1 lần, còn nếu đặt trong vòng lặp nó sẽ in ngay sau khi vừa mới nối 1 kí tự, kiểu: 2; 24; 246; 2468...
    // console.log(soChan);
    // console.log(soLe);

    for (var j = 0; j <= 100 ;j++){
        if (j % 2 == 0){
            soChan += " " + j;
        } else {
            soLe += " " + j;
        }
    }
    document.getElementById("txtResult1").innerHTML = "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;
}
document.getElementById("btnLoop1").onclick = inSoChanLe;




