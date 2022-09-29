const saat = document.querySelector(".saat");
const tarih = document.querySelector(".tarih");

const saatSayac = () => {
  let second = new Date().getSeconds();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  saat.innerHTML = `<h1>${hour}.${minute} <sup>${second}</sup></h1>`;
};

const day= () => {
let günler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
let aylar =["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos","Eylül" ,"Ekim", "Kasım","Aralık"]
let gün = new Date().getDate();
let günadi = new Date().getDay();
let ay = new Date().getMonth();
let yil = new Date().getFullYear();
tarih.innerHTML=`<p>${gün} <span>${aylar[ay]}</span> ${yil}</p> 
<p>${günler[günadi-1]}</p>`
};

setInterval(saatSayac, 100);
setInterval(day,1000)
