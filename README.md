## 📌 Introduction
This repository explores different ways to define and use functions in JavaScript, showcasing various approaches for handling function arguments and execution styles.

## ✨ Function Implementations

### 1️⃣ **Basic Function with Parameters**
```javascript
function addName(firstname, lastname) {
    console.log('Nama depan:', firstname);
    console.log('Nama belakang:', lastname);
}
addName('Sabrina', 'Bina');
```

### 2️⃣ **Function Using `arguments` Object**
```javascript
function addName() {
    console.log('Nama depan:', arguments[0]);
    console.log('Nama belakang:', arguments[1]);
}
addName('Sabrina', 'Bina');
```

### 3️⃣ **Function Iterating Over `arguments`**
```javascript
function addName() {
    for (let i = 0; i < arguments.length; i++) {
        console.log('Nama depan:', arguments[i]);
    }
}
addName('Sabrina', 'Bina');
```

### 4️⃣ **Concatenating Names**
```javascript
function addName(firstname, lastname) {
    console.log(firstname + ' ' + lastname);
}
addName('Sabrina', 'Natasya');
```

### 5️⃣ **Anonymous Function Assignment**
```javascript
const addName = function(firstname, lastname) {
    console.log(firstname + ' ' + lastname);
};
addName('Sabrina', 'Bilbina');
```

### 6️⃣ **Using `new Function` Constructor**
```javascript
const fullname = new Function('firstname', 'lastname', 'console.log(firstname, lastname)');
fullname('Sabrina', 'Bilbina');
```

### 7️⃣ **Different Function Declaration Styles**
#### ✅ `new Function` Constructor
```javascript
const sum1 = new Function('x', 'y', 'console.log(x + y)');
```
#### ✅ Standard Function
```javascript
function sum2(x, y) {
    console.log(x + y);
}
```
#### ✅ Arrow Function
```javascript
const sum3 = (x, y) => {
    console.log(x + y);
};
```

### 8️⃣ **Hoisting Example**
```javascript
console.log(data); // ReferenceError jika menggunakan `let` atau `const`
var data = 1;
console.log(data); // Output: 1

## ✨ Tugas JavaScript: Perhitungan Matematika & Gaji Karyawan ✨

### 📌 Deskripsi
Tugas ini berisi dua bagian utama:
1. **Perhitungan luas bangun datar** (lingkaran, segitiga, dan persegi)
2. **Menghitung total gaji karyawan dalam satu bulan** berdasarkan input pengguna

---

## 📝 Tugas Pertama: Perhitungan Matematika

### 🔹 Luas Lingkaran
**Rumus:**
```math
L = π × r × r
```
**Kode JavaScript:**
```javascript
const lingkaran = () => {
    const r = parseFloat(prompt('Masukkan jari-jari (r):'));
    const luas = Math.PI * r * r;
    console.log(`Luas lingkaran dengan jari-jari ${r}: ${luas.toFixed(2)}`);
};
lingkaran();
```
---

### 🔹 Luas Segitiga
**Rumus:**
```math
L = (a × t) / 2
```
**Kode JavaScript:**
```javascript
const segitiga = () => {
    const a = parseFloat(prompt('Masukkan alas (a):'));
    const t = parseFloat(prompt('Masukkan tinggi (t):'));
    const luas = (a * t) / 2;
    console.log(`Luas segitiga dengan alas ${a} dan tinggi ${t}: ${luas.toFixed(2)}`);
};
segitiga();
```
---

### 🔹 Luas Persegi
**Rumus:**
```math
L = p × l
```
**Kode JavaScript:**
```javascript
const persegi = () => {
    const p = parseFloat(prompt('Masukkan panjang (p):'));
    const l = parseFloat(prompt('Masukkan lebar (l):'));
    const luas = p * l;
    console.log(`Luas persegi dengan panjang ${p} dan lebar ${l}: ${luas.toFixed(2)}`);
};
persegi();
```
---

## 📝 Tugas Kedua: Menghitung Gaji Karyawan

**Keterangan:** Program ini meminta pengguna untuk memasukkan nama karyawan, gaji per hari, dan jumlah hari kerja. Lalu, akan menghitung total gaji selama satu bulan.

**Rumus:**
```math
Total Gaji = Gaji per Hari × Jumlah Hari Kerja
```
**Kode JavaScript:**
```javascript
const gajiKaryawan = () => {
    let namaKaryawan = prompt('Siapa nama anda?');
    let gajiPerhari = parseFloat(prompt('Gaji per hari?'));
    let jumlahHari = parseInt(prompt('Jumlah hari masuk kerja?'));
    
    const totalGaji = gajiPerhari * jumlahHari;
    console.log(`Total gaji ${namaKaryawan} dalam satu bulan: Rp ${totalGaji.toFixed(2)}`);
};
gajiKaryawan();
```
---

## 🎯 Cara Menjalankan Program
1. Simpan kode dalam file `.js`
2. Jalankan di browser menggunakan `console.log()` atau gunakan `Node.js`
3. Masukkan input yang diminta
4. Lihat hasil perhitungan di konsol

---

### 🚀 Happy Coding! 🎉


```


