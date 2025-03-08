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
```


