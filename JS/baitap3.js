// bt3: Tìm số nguyên dương nhỏ nhất

function numMin(){
    var sum = 0;
    var i = 0;
    while (sum < 10000) {
        i++;
        sum += i;
    }
    // console.log(i);
    // console.log(sum);
    document.getElementById("txtResult3").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}


document.getElementById("btnLoop3").onclick = numMin;