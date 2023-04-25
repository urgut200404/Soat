let soat1 = document.querySelector('.soat');
let minut1 = document.querySelector('.minut');
let sekund1 = document.querySelector('.sekund');
let h1 = document.querySelector('h1');
let prog = document.querySelector('progress');


setInterval(time,1000);
function time(){
    let vaqt =new Date();
    let soat = vaqt.getHours();
    let minut = vaqt.getMinutes();
    let sekund = vaqt.getSeconds();
    soat1.style.transform=`rotate(${soat*30}deg)`;
    minut1.style.transform=`rotate(${minut*6}deg)`;
    sekund1.style.transform=`rotate(${sekund*6}deg)`;
    h1.innerHTML=soat+":"+minut+":"+sekund;
}
