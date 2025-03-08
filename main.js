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

// const fullname = function addName(firstname, lastname) {
//     console.log(firstname + ' ' + lastname)
// }

// fullname('sabrina','bilbina')

// const addName = function addName(firstname, lastname) {
//     console.log(firstname + ' ' + lastname)
// }


// const fullname = new function (
//     'firstname', 
//     'lastname', 
//     'console.log(firstname, lastname)',
// )

// fullname('sabrina','bilbina')

// const sum = new Function('x', 'y', 'return x+y');

// console.log(sum(2, 3))


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


