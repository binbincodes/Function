/*
TUGAS PERTAMA :
1. Membuat Perhitungan Matematika
Luas lingkaran 
- Rumus :
L = 3.14 x r x r
Luas Segitiga
- Rumus :
L = a * t/2
Luas Persegi
- Rumus :
L = p * l
**/

// Jawab :
// luas lingkaran
const lingkaran = () => {
    const r = parseFloat(prompt('Masukkan jari-jari (r):'));
    const luas = Math.PI * r * r;
    console.log(`Luas lingkaran dengan jari-jari ${r}:, ${luas.toFixed(2)}`);
}
lingkaran();

// luas segitiga
const segitiga = () => {
    const a = parseInt(prompt('Masukkan alas (a):'));
    const t = parseInt(prompt('Masukkan tinggi (t):'));
    const luas = a * t / 2;
    console.log(`Luas segitiga dengan alas ${a} dan tinggi ${t}:, ${luas.toFixed(2)}`);
}
segitiga()

// luas persegi
const persegi = () => {
    const p = parseInt(prompt('Masukkan panjang (p):'));
    const l = parseInt(prompt('Masukkan lebar (l):'));
    const luas = p * l;
    console.log(`Luas persegi dengan panjang ${p} dan lebar ${l}:, ${luas.toFixed(2)}`);
}

persegi()

/*
TUGAS KEDUA :
2. Menghitung total gaji yang di dapat dalam satu bulan
dengan input minimal :
- nama karyawan
- gaji perhari
- jumlah hari masuk kerja
**/

//jawab

const gajiKaryawan = () => {
// user input
    let namaKaryawan = prompt('Siapa nama anda?');
    let gajiPerhari = parseInt(prompt('gaji perhari?'));
    let jumlahHari = parseInt(prompt('jumlah hari masuk kerja?'));
// total gaji
    const totalGaji = gajiPerhari * jumlahHari;
    console.log(`Total gaji ${namaKaryawan} dalam satu bulan: ${totalGaji.toFixed(2)}`);
    
}   
gajiKaryawan();














//  return => console.log

function addName(firstname, lastname) {
    console.log('nama depan:', firstname)
    console.log('nama belakang:', lastname)
}

addName('sabrina', 'bina')

function addName() {
    console.log('nama depan:', arguments[0])
    console.log('nama belakang:', arguments[1])
}

addName('sabrina', 'bina')


function addName() {
    for (let i = 0; i < arguments.length; i++) {
        console.log('nama depan:', arguments[i])
    }
}

addName('sabrina', 'bina')

function addName(firstname, lastname) {
    console.log(firstname + ' ' + lastname)
}

addName('sabrina', 'natasya')

const fullname = function addName(firstname, lastname) {
    console.log(firstname + ' ' + lastname)
}

fullname('sabrina','bilbina')

// const addName = function addName(firstname, lastname) {
//     console.log(firstname + ' ' + lastname)
// }

const sum = new Function('x', 'y', 'return x+y');

console.log(sum(2, 3))


// cara 1 keywoard new function
const sum = new Function('x','y','console.log(x+y)')

// cara 2 standar function
function sum(x, y) {
    console.log(x+y)
}

//cara 3 arrow function
const sum3 = (x, y) => {
    console.log(x +y)
}

sum1(1,1)
sum2(2,3)
sum3(3,6)

//hositing
const data = 1
console.log(data)

// var data = 1
// console.log(data)
