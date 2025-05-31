// document.querySelector('.btn-primary').addEventListener('click', function(){
//     alert("Selamat datang di JobSeekr! Silakan daftar untuk mulai");
// });

function mulai() {
    alert("Selamat datang di JobSeekr! Silakan daftar untuk mulai");
} 
// ini alternatif dlm membuat fungsi yg sama

const nama = prompt("Masukkan nama Anda:");
document.getElementById("header_h1").innerHTML = "Halo " + nama + ", Temukan Karier Impianmu";

// function mouse() {
//     document.getElementById("button").innerHTML = "Ayo Gabung!";
// } 

// function leave() {
//     document.getElementById("button").innerHTML = "Mulai Sekarang";
// } 

// cara alternatif untuk mouseover dan mouseout

const btn = document.querySelector('.btn-primary');
btn.addEventListener('mouseover', () => {
    btn.innerText = "Ayo Gabung!";
});
btn.addEventListener('mouseout', () => {
    btn.innerText = "Mulai Sekarang";
});

function bikinButton() {
    const form = document.createElement('form');
    form.innerHTML =
    '<input type="text" id="nama" placeholder="tulis nama anda" required>'
    '<input type="text" id="work" placeholder="tulis pekerjaan impian anda" required>';
    "<button class='btn-primary' id='cekPeluang'>Cek Peluangmu!</button><p id='hasilPeluang'></p>";
    document.querySelector('.cta').append(form);

    // const divBaru = document.createElement('div');
    // divBaru.innerHTML = "<button class='btn-primary' id='cekPeluang'>Cek Peluangmu!</button><p id='hasilPeluang'></p>";
    // document.querySelector('.cta').append(divBaru);

    document.getElementById("cekPeluang").onclick = () => {
    const nilai = Math.floor(Math.random() * 51) + 50;
    document.getElementById("hasilPeluang").innerText = `Peluang Anda: ${nilai}%`;

}};   

// const estDiv = document.createElement("div");
// estDiv.innerHTML = '<button class="btn-primary" id="cekPeluang">Cek</button> <p id="hasilPeluang"></p>';
// document.querySelector('.cta').appendChild(estDiv);
// document.getElementById("cekPeluang").onclick = () => {
//     const nilai = Math.floor(Math.random() * 51) + 50;
//     document.getElementById("hasilPeluang").innerText = `Peluang Anda: ${nilai}%`;
// };