let fullName = prompt("Adınız Nedir ? ")

let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${fullName}`;

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  //add zero in front of numbers < 10
    return i;
}



var tarih = new Date();
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

document.getElementById('gun').innerHTML = (gunler[tarih.getDay()]) + " Tarihinde";

